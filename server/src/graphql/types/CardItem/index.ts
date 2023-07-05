/*
model cart_item {
  cart_item_id           Int       @id @default(autoincrement())
  uuid                   String    @unique(map: "CART_ITEM_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  cart_id                Int
  product_id             Int
  product_sku            String    @db.VarChar
  product_name           String
  thumbnail              String?   @db.VarChar
  product_weight         Decimal?  @db.Decimal(12, 4)
  product_price          Decimal   @db.Decimal(12, 4)
  product_price_incl_tax Decimal   @db.Decimal(12, 4)
  qty                    Int
  final_price            Decimal   @db.Decimal(12, 4)
  final_price_incl_tax   Decimal   @db.Decimal(12, 4)
  tax_percent            Decimal   @db.Decimal(12, 4)
  tax_amount             Decimal   @db.Decimal(12, 4)
  discount_amount        Decimal   @db.Decimal(12, 4)
  total                  Decimal   @db.Decimal(12, 4)
  variant_group_id       Int?
  variant_options        String?
  product_custom_options String?
  created_at             DateTime? @default(now()) @db.Timestamptz(6)
  updated_at             DateTime? @default(now()) @db.Timestamptz(6)
  cart                   cart      @relation(fields: [cart_id], references: [cart_id], onDelete: Cascade)
  product                product   @relation(fields: [product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([cart_id], map: "FK_CART_ITEM")
  @@index([product_id], map: "FK_CART_ITEM_PRODUCT")
}

*/

import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

export const CartItem = objectType({
  name: 'CartItem',
  definition(t) {
    t.nonNull.int('cart_item_id');
    t.nonNull.string('uuid');
    t.nonNull.int('cart_id');
    t.nonNull.int('product_id');
    t.nonNull.string('product_sku');
    t.nonNull.string('product_name');
    t.string('thumbnail');
    t.float('product_weight');
    t.nonNull.float('product_price');
    t.nonNull.float('product_price_incl_tax');
    t.nonNull.int('qty');
    t.nonNull.float('final_price');
    t.nonNull.float('final_price_incl_tax');
    t.nonNull.float('tax_percent');
    t.nonNull.float('tax_amount');
    t.nonNull.float('discount_amount');
    t.nonNull.float('total');
    t.int('variant_group_id');
    t.string('variant_options');
    t.string('product_custom_options');
    t.string('created_at');
    t.string('updated_at');
    t.nonNull.field('cart', {
      type: 'Cart',
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.cart.findUnique({
          where: { cart_id: parent.cart_item_id },
        }) as any;
      },
    });
    t.nonNull.field('product', {
      type: 'Product',
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findUnique({
          where: { product_id: parent.product_id },
        }) as any;
      },
    });
  },
});

export const cartItemQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listCartItems', {
      type: 'CartItem',
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.cart_item.findMany() as any;
      },
    });
  },
});
