import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { hashPassword, verifyPassword } from "../../utils/crypto";
import { Context } from "../graphql";

// Query to generate graphQL schema
export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.nonNull.int("customer_id");
    t.nonNull.string("uuid");
    t.nonNull.int("status");
    t.int("group_id");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.string("full_name");
    t.string("created_at");
    t.string("updated_at");
    t.nullable.field("customer_group", {
      type: "CustomerGroup",
      resolve: (parent, args, context) => {
        return context.prisma.customer
          .findUnique({ where: { customer_id: parent.customer_id } })
          .customer_group();
      },
    });
    t.list.nullable.field("customer_address", {
      type: "CustomerAddress",
      resolve: (parent, args, context) => {
        return context.prisma.customer_address.findMany({
          where: { customer_id: parent.customer_id },
        });
      },
    });
  },
});

//Query to fetch the data from the database
export const customerQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listCustomers", {
      type: "Customer",
      resolve(parent, arg, context: Context, info) {
        return context.prisma.customer.findMany() as any;
      },
    });
    t.nonNull.field("getCustomerByIdOrEmail", {
      type: "Customer",
      args: {
        customerId: intArg(),
        email: stringArg(),
      },
      resolve(parent, { email, customerId }, context: Context, info) {
        const whereCondition = customerId ? { customer_id: customerId } : { email };
        return context.prisma.customer.findUnique({
          where: whereCondition,
        }) as any;
      },
    });

    /* verifyCustomer Query */
    t.field("verifyCustomer", {
      type: "Customer",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, { email, password }, context: Context, info) {
        const user = (await context.prisma.customer.findUnique({
          where: { email },
        })) as any;

        if (!user || !(await verifyPassword(password, user.password))) {
          return;
        }

        return user;
      },
    });
  },
});

// Mutation for CRUD Operations
export const customerMutation = extendType({
  type: "Mutation",
  definition(t) {
    // Mutation to create a new customer
    t.nonNull.field("createCustomer", {
      type: "Customer",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        fullName: nonNull(stringArg()),
      },
      resolve(parent, { email, password, fullName }, context: Context) {
        return context.prisma.customer.create({
          data: {
            email: email,
            password: hashPassword(password),
            full_name: fullName,
          },
        }) as any;
      },
    });
    // Mutation to Update an existing customer
    t.nonNull.field("updateCustomer", {
      type: "Customer",
      args: {
        customerId: nonNull(intArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        fullName: nonNull(stringArg()),
      },
      resolve(parent, { customerId, email, password, fullName }, context: Context) {
        return context.prisma.customer.update({
          where: { customer_id: customerId },
          data: {
            email: email,
            password: hashPassword(password),
            full_name: fullName,
          },
        }) as any;
      },
    });
    // Mutation to create a new customer with pre-check for existing email
    t.field("registerCustomer", {
      type: "Customer",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        fullName: nonNull(stringArg()),
      },
      async resolve(parent, { email, password, fullName }, context: Context) {
        const isUserExist = await context.prisma.customer.findUnique({
          where: {
            email,
          },
        });
        if (isUserExist) {
          return null;
        } else {
          return context.prisma.customer.create({
            data: {
              email: email,
              password: hashPassword(password),
              full_name: fullName,
            },
          }) as any;
        }
      },
    });
  },
});
