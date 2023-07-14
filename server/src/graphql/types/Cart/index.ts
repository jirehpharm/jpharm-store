import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

/*
model cart {
  cart_id               Int            @id @default(autoincrement())
  uuid                  String         @unique(map: "CART_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  sid                   String?        @db.VarChar
  currency              String         @db.VarChar
  customer_id           Int?
  customer_group_id     Int?           @db.SmallInt
  customer_email        String?        @db.VarChar
  customer_full_name    String?        @db.VarChar
  user_ip               String?        @db.VarChar
  status                Boolean        @default(false)
  coupon                String?        @db.VarChar
  shipping_fee_excl_tax Decimal?       @db.Decimal(12, 4)
  shipping_fee_incl_tax Decimal?       @db.Decimal(12, 4)
  discount_amount       Decimal?       @db.Decimal(12, 4)
  sub_total             Decimal        @db.Decimal(12, 4)
  total_qty             Int
  total_weight          Decimal?       @db.Decimal(12, 4)
  tax_amount            Decimal        @db.Decimal(12, 4)
  grand_total           Decimal        @db.Decimal(12, 4)
  shipping_method       String?        @db.VarChar
  shipping_method_name  String?        @db.VarChar
  shipping_zone_id      Int?
  shipping_address_id   Int?
  payment_method        String?        @db.VarChar
  payment_method_name   String?        @db.VarChar
  billing_address_id    Int?
  shipping_note         String?
  created_at            DateTime?      @default(now()) @db.Timestamptz(6)
  updated_at            DateTime?      @default(now()) @db.Timestamptz(6)
  customer              customer?      @relation(fields: [customer_id], references: [customer_id], onUpdate: NoAction, map: "FK_CART_CUSTOMER_ID")
  shipping_zone         shipping_zone? @relation(fields: [shipping_zone_id], references: [shipping_zone_id], onUpdate: NoAction)
  cart_item             cart_item[]

  @@index([shipping_zone_id], map: "FK_CART_SHIPPING_ZONE")
}

*/

// Query to generate graphQL schema
export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.nonNull.int('cart_id');
    t.nonNull.string('uuid');
    t.nonNull.boolean('status');
    t.string('sid');
    t.nonNull.string('currency');
    t.int('customer_id');
    t.int('customer_group_id');
    t.string('customer_email');
    t.string('customer_full_name');
    t.string('user_ip');
    t.string('coupon');
    t.float('shipping_fee_excl_tax');
    t.float('shipping_fee_incl_tax');
    t.float('discount_amount');
    t.nonNull.float('sub_total');
    t.nonNull.int('total_qty');
    t.float('total_weight');
    t.nonNull.float('tax_amount');
    t.nonNull.float('grand_total');
    t.string('shipping_method');
    t.string('shipping_method_name');
    t.int('shipping_zone_id');
    t.int('shipping_address_id');
    t.string('payment_method');
    t.string('payment_method_name');
    t.int('billing_address_id');
    t.string('shipping_note');
    t.string('created_at');
    t.string('updated_at');

    t.nullable.field('customer', {
      type: 'Customer',
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.customer.findFirst({
          where: { group_id: parent.customer_group_id },
        }) as any;
      },
    });

    t.list.nullable.field('shipping_zone', {
      type: 'AdminUser',
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.customer_address.findMany({
          where: { customer_id: parent.customer_id },
        }) as any;
      },
    });
  },
});

//Query to fetch the data from the database
export const cartQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listCarts', {
      type: 'Cart',
      resolve(parent, arg, context: IGraphQLContext, info) {
        return context.prisma.cart.findMany() as any;
      },
    });
  },
});
