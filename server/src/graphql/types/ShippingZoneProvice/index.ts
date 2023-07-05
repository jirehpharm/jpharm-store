/*
model shipping_zone_province {
  shipping_zone_province_id Int           @id @default(autoincrement())
  uuid                      String        @unique(map: "SHIPPING_ZONE_PROVINCE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  zone_id                   Int
  province                  String        @unique(map: "SHIPPING_ZONE_PROVINCE_PROVINCE_UNIQUE") @db.VarChar
  shipping_zone             shipping_zone @relation(fields: [zone_id], references: [shipping_zone_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([zone_id], map: "FK_SHIPPING_ZONE_PROVINCE")
}

*/

import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

export const ShippingZoneProvince = objectType({
  name: 'ShippingZoneProvince',
  definition(t) {
    t.nonNull.int('shipping_zone_province_id');
    t.nonNull.string('uuid');
    t.nonNull.int('zone_id');
    t.nonNull.string('province');

    t.nonNull.field('shipping_zone', {
      type: 'ShippingZone',
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.shipping_zone.findUnique({
          where: { shipping_zone_id: parent.shipping_zone_province_id },
        });
      },
    });
  },
});

export const shippingZoneProvinceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listShippingZoneProvinces', {
      type: 'ShippingZoneProvince',
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.shipping_zone_province.findMany() as any;
      },
    });
  },
});
