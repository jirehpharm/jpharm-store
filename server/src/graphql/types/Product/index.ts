import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

/* 
model product {
  product_id                    Int                             @id @default(autoincrement())
  uuid                          String                          @unique(map: "PRODUCT_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  type                          String                          @default("simple") @db.VarChar
  variant_group_id              Int?
  visibility                    Boolean                         @default(true)
  group_id                      Int?                            @default(1)
  image                         String?                         @db.VarChar
  sku                           String                          @unique(map: "PRODUCT_SKU_UNIQUE") @db.VarChar
  price                         Decimal                         @db.Decimal(12, 4)
  qty                           Int
  weight                        Decimal?                        @db.Decimal(12, 4)
  manage_stock                  Boolean
  stock_availability            Boolean
  tax_class                     Int?                            @db.SmallInt
  status                        Boolean                         @default(false)
  created_at                    DateTime?                       @default(now()) @db.Timestamptz(6)
  updated_at                    DateTime?                       @default(now()) @db.Timestamptz(6)
  attribute_group               attribute_group?                @relation(fields: [group_id], references: [attribute_group_id], onUpdate: NoAction)
  tax_class_productTotax_class  tax_class?                      @relation(fields: [tax_class], references: [tax_class_id], onUpdate: NoAction, map: "FK_TAX_CLASS")
  variant_group                 variant_group?                  @relation(fields: [variant_group_id], references: [variant_group_id], onUpdate: NoAction)
  cart_item                     cart_item[]
  product_attribute_value_index product_attribute_value_index[]
  product_category              product_category[]
  product_collection            product_collection[]
  product_custom_option         product_custom_option[]
  product_description           product_description?
  product_image                 product_image[]

  @@index([group_id], map: "FK_PRODUCT_ATTRIBUTE_GROUP")
  @@index([variant_group_id], map: "FK_PRODUCT_VARIANT_GROUP")
}     

*/

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.nonNull.int("product_id");
    t.nonNull.string("uuid");
    t.int("variant_group_id");
    t.nonNull.string("sku");
    t.nonNull.string("price");
    t.nonNull.int("qty");
    t.float("weight");
    t.nonNull.boolean("visibility");
    t.string("image");
    t.nonNull.boolean("manage_stock");
    t.nonNull.boolean("stock_availability");
    t.nonNull.int("tax_class");
    t.nonNull.boolean("status");
    t.nonNull.string("type");
    t.int("group_id");
    t.string("created_at");
    t.string("updated_at");
    t.field("attribute_group", {
      type: "AttributeGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute_group.findFirst({
          where: { attribute_group_id: parent.group_id },
        }) as any;
      },
    });
    t.field("product_attribute_value_index", {
      type: "ProductAttributeValueIndex",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_attribute_value_index.findFirst({
          where: {
            product_id: parent.product_id,
          },
        });
      },
    });

    t.field("product_category", {
      type: "ProductCategory",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_category.findFirst({
          where: { product_id: parent.product_id },
        });
      },
    });

    t.field("product_collection", {
      type: "ProductCollection",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_collection.findFirst({
          where: { product_id: parent.product_id },
        });
      },
    });

    t.field("product_custom_option", {
      type: "ProductCustomOption",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_custom_option.findFirst({
          where: { product_custom_option_product_id: parent.product_id },
        });
      },
    });

    t.field("product_description", {
      type: "ProductDescription",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_description.findFirst({
          where: { product_description_product_id: parent.product_id },
        }) as any;
      },
    });

    t.field("product_image", {
      type: "ProductImage",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_image.findFirst({
          where: { product_image_product_id: parent.product_id },
        }) as any;
      },
    });

    t.field("tax_class", {
      type: "TaxClass",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.tax_class.findFirst({
          where: { product: { some: { product_id: parent.product_id } } },
        }) as any;
      },
    });

    t.field("variant_group", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.variant_group_id },
        }) as any;
      },
    });

    // t.field("cart_item", {
    //   type: "CartItem",
    //   resolve: (parent, args, context: IGraphQLContext) => {
    //     return context.prisma.cart_item.findFirst({
    //       where: { cart_item_id: parent.cart_item_id },
    //     });
    //   },
    // });
  },
});

export const productQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listProducts", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findMany() as any;
      },
    });
  },
});
