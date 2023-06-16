-- CreateTable
CREATE TABLE "admin_user" (
    "admin_user_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "full_name" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_user_pkey" PRIMARY KEY ("admin_user_id")
);

-- CreateTable
CREATE TABLE "attribute" (
    "attribute_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "attribute_code" VARCHAR NOT NULL,
    "attribute_name" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "is_required" BOOLEAN NOT NULL DEFAULT false,
    "display_on_frontend" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_filterable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "attribute_pkey" PRIMARY KEY ("attribute_id")
);

-- CreateTable
CREATE TABLE "attribute_group" (
    "attribute_group_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "group_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attribute_group_pkey" PRIMARY KEY ("attribute_group_id")
);

-- CreateTable
CREATE TABLE "attribute_group_link" (
    "attribute_group_link_id" SERIAL NOT NULL,
    "attribute_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "attribute_group_link_pkey" PRIMARY KEY ("attribute_group_link_id")
);

-- CreateTable
CREATE TABLE "attribute_option" (
    "attribute_option_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "attribute_id" INTEGER NOT NULL,
    "attribute_code" VARCHAR NOT NULL,
    "option_text" VARCHAR NOT NULL,

    CONSTRAINT "attribute_option_pkey" PRIMARY KEY ("attribute_option_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cart_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sid" VARCHAR,
    "currency" VARCHAR NOT NULL,
    "customer_id" INTEGER,
    "customer_group_id" SMALLINT,
    "customer_email" VARCHAR,
    "customer_full_name" VARCHAR,
    "user_ip" VARCHAR,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "coupon" VARCHAR,
    "shipping_fee_excl_tax" DECIMAL(12,4),
    "shipping_fee_incl_tax" DECIMAL(12,4),
    "discount_amount" DECIMAL(12,4),
    "sub_total" DECIMAL(12,4) NOT NULL,
    "total_qty" INTEGER NOT NULL,
    "total_weight" DECIMAL(12,4),
    "tax_amount" DECIMAL(12,4) NOT NULL,
    "grand_total" DECIMAL(12,4) NOT NULL,
    "shipping_method" VARCHAR,
    "shipping_method_name" VARCHAR,
    "shipping_zone_id" INTEGER,
    "shipping_address_id" INTEGER,
    "payment_method" VARCHAR,
    "payment_method_name" VARCHAR,
    "billing_address_id" INTEGER,
    "shipping_note" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "cart_address" (
    "cart_address_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" VARCHAR,
    "postcode" VARCHAR,
    "telephone" VARCHAR,
    "country" VARCHAR,
    "province" VARCHAR,
    "city" VARCHAR,
    "address_1" VARCHAR,
    "address_2" VARCHAR,

    CONSTRAINT "cart_address_pkey" PRIMARY KEY ("cart_address_id")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "cart_item_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cart_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "product_sku" VARCHAR NOT NULL,
    "product_name" TEXT NOT NULL,
    "thumbnail" VARCHAR,
    "product_weight" DECIMAL(12,4),
    "product_price" DECIMAL(12,4) NOT NULL,
    "product_price_incl_tax" DECIMAL(12,4) NOT NULL,
    "qty" INTEGER NOT NULL,
    "final_price" DECIMAL(12,4) NOT NULL,
    "final_price_incl_tax" DECIMAL(12,4) NOT NULL,
    "tax_percent" DECIMAL(12,4) NOT NULL,
    "tax_amount" DECIMAL(12,4) NOT NULL,
    "discount_amount" DECIMAL(12,4) NOT NULL,
    "total" DECIMAL(12,4) NOT NULL,
    "variant_group_id" INTEGER,
    "variant_options" TEXT,
    "product_custom_options" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("cart_item_id")
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" BOOLEAN NOT NULL,
    "parent_id" INTEGER,
    "include_in_nav" BOOLEAN NOT NULL,
    "position" SMALLINT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "category_description" (
    "category_description_id" SERIAL NOT NULL,
    "category_description_category_id" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "short_description" TEXT,
    "description" TEXT,
    "image" VARCHAR,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "url_key" VARCHAR NOT NULL,

    CONSTRAINT "category_description_pkey" PRIMARY KEY ("category_description_id")
);

-- CreateTable
CREATE TABLE "cms_page" (
    "cms_page_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "layout" VARCHAR NOT NULL,
    "status" BOOLEAN,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cms_page_pkey" PRIMARY KEY ("cms_page_id")
);

-- CreateTable
CREATE TABLE "cms_page_description" (
    "cms_page_description_id" SERIAL NOT NULL,
    "cms_page_description_cms_page_id" INTEGER,
    "url_key" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "content" TEXT,
    "meta_title" VARCHAR,
    "meta_keywords" VARCHAR,
    "meta_description" TEXT,

    CONSTRAINT "cms_page_description_pkey" PRIMARY KEY ("cms_page_description_id")
);

-- CreateTable
CREATE TABLE "collection" (
    "collection_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "description" TEXT,
    "code" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("collection_id")
);

-- CreateTable
CREATE TABLE "coupon" (
    "coupon_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR NOT NULL,
    "discount_amount" DECIMAL(12,4) NOT NULL,
    "free_shipping" BOOLEAN NOT NULL DEFAULT false,
    "discount_type" VARCHAR NOT NULL DEFAULT E'1',
    "coupon" VARCHAR NOT NULL,
    "used_time" INTEGER NOT NULL DEFAULT 0,
    "target_products" TEXT,
    "condition" TEXT,
    "user_condition" TEXT,
    "buyx_gety" TEXT,
    "max_uses_time_per_coupon" INTEGER,
    "max_uses_time_per_customer" INTEGER,
    "start_date" TIMESTAMPTZ(6),
    "end_date" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coupon_pkey" PRIMARY KEY ("coupon_id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" SMALLINT NOT NULL DEFAULT 1,
    "group_id" INTEGER DEFAULT 1,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "full_name" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "customer_address" (
    "customer_address_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "customer_id" INTEGER NOT NULL,
    "full_name" VARCHAR,
    "telephone" VARCHAR,
    "address_1" VARCHAR,
    "address_2" VARCHAR,
    "postcode" VARCHAR,
    "city" VARCHAR,
    "province" VARCHAR,
    "country" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "is_default" SMALLINT,

    CONSTRAINT "customer_address_pkey" PRIMARY KEY ("customer_address_id")
);

-- CreateTable
CREATE TABLE "customer_group" (
    "customer_group_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "group_name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_group_pkey" PRIMARY KEY ("customer_group_id")
);

-- CreateTable
CREATE TABLE "event" (
    "event_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "data" JSON,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "migration" (
    "migration_id" SERIAL NOT NULL,
    "module" VARCHAR NOT NULL,
    "version" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "migration_pkey" PRIMARY KEY ("migration_id")
);

-- CreateTable
CREATE TABLE "order" (
    "order_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "integration_order_id" VARCHAR,
    "sid" VARCHAR,
    "order_number" VARCHAR NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "currency" VARCHAR NOT NULL,
    "customer_id" INTEGER,
    "customer_email" VARCHAR,
    "customer_full_name" VARCHAR,
    "user_ip" VARCHAR,
    "user_agent" VARCHAR,
    "coupon" VARCHAR,
    "shipping_fee_excl_tax" DECIMAL(12,4),
    "shipping_fee_incl_tax" DECIMAL(12,4),
    "discount_amount" DECIMAL(12,4),
    "sub_total" DECIMAL(12,4) NOT NULL,
    "total_qty" INTEGER NOT NULL,
    "total_weight" DECIMAL(12,4),
    "tax_amount" DECIMAL(12,4) NOT NULL,
    "shipping_note" TEXT,
    "grand_total" DECIMAL(12,4) NOT NULL,
    "shipping_method" VARCHAR,
    "shipping_method_name" VARCHAR,
    "shipping_address_id" INTEGER,
    "payment_method" VARCHAR,
    "payment_method_name" VARCHAR,
    "billing_address_id" INTEGER,
    "shipment_status" VARCHAR NOT NULL DEFAULT E'0',
    "payment_status" VARCHAR NOT NULL DEFAULT E'0',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "order_activity" (
    "order_activity_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_activity_order_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "customer_notified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_activity_pkey" PRIMARY KEY ("order_activity_id")
);

-- CreateTable
CREATE TABLE "order_address" (
    "order_address_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" VARCHAR,
    "postcode" VARCHAR,
    "telephone" VARCHAR,
    "country" VARCHAR,
    "province" VARCHAR,
    "city" VARCHAR,
    "address_1" VARCHAR,
    "address_2" VARCHAR,

    CONSTRAINT "order_address_pkey" PRIMARY KEY ("order_address_id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "order_item_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_item_order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "referer" INTEGER,
    "product_sku" VARCHAR NOT NULL,
    "product_name" TEXT NOT NULL,
    "thumbnail" VARCHAR,
    "product_weight" DECIMAL(12,4),
    "product_price" DECIMAL(12,4) NOT NULL,
    "product_price_incl_tax" DECIMAL(12,4) NOT NULL,
    "qty" INTEGER NOT NULL,
    "final_price" DECIMAL(12,4) NOT NULL,
    "final_price_incl_tax" DECIMAL(12,4) NOT NULL,
    "tax_percent" DECIMAL(12,4) NOT NULL,
    "tax_amount" DECIMAL(12,4) NOT NULL,
    "discount_amount" DECIMAL(12,4) NOT NULL,
    "total" DECIMAL(12,4) NOT NULL,
    "variant_group_id" INTEGER,
    "variant_options" TEXT,
    "product_custom_options" TEXT,
    "requested_data" TEXT,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "payment_transaction" (
    "payment_transaction_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "payment_transaction_order_id" INTEGER NOT NULL,
    "transaction_id" VARCHAR,
    "transaction_type" VARCHAR NOT NULL,
    "amount" DECIMAL(12,4) NOT NULL,
    "parent_transaction_id" VARCHAR,
    "payment_action" VARCHAR,
    "additional_information" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_transaction_pkey" PRIMARY KEY ("payment_transaction_id")
);

-- CreateTable
CREATE TABLE "product" (
    "product_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR NOT NULL DEFAULT E'simple',
    "variant_group_id" INTEGER,
    "visibility" BOOLEAN NOT NULL DEFAULT true,
    "group_id" INTEGER DEFAULT 1,
    "image" VARCHAR,
    "sku" VARCHAR NOT NULL,
    "price" DECIMAL(12,4) NOT NULL,
    "qty" INTEGER NOT NULL,
    "weight" DECIMAL(12,4),
    "manage_stock" BOOLEAN NOT NULL,
    "stock_availability" BOOLEAN NOT NULL,
    "tax_class" SMALLINT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "product_attribute_value_index" (
    "product_attribute_value_index_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_id" INTEGER NOT NULL,
    "attribute_id" INTEGER NOT NULL,
    "option_id" INTEGER,
    "option_text" TEXT,

    CONSTRAINT "product_attribute_value_index_pkey" PRIMARY KEY ("product_attribute_value_index_id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "product_category_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("product_category_id")
);

-- CreateTable
CREATE TABLE "product_collection" (
    "product_collection_id" SERIAL NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "product_collection_pkey" PRIMARY KEY ("product_collection_id")
);

-- CreateTable
CREATE TABLE "product_custom_option" (
    "product_custom_option_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_custom_option_product_id" INTEGER NOT NULL,
    "option_name" VARCHAR NOT NULL,
    "option_type" VARCHAR NOT NULL,
    "is_required" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER,

    CONSTRAINT "product_custom_option_pkey" PRIMARY KEY ("product_custom_option_id")
);

-- CreateTable
CREATE TABLE "product_custom_option_value" (
    "product_custom_option_value_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "option_id" INTEGER NOT NULL,
    "extra_price" DECIMAL(12,4),
    "sort_order" INTEGER,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "product_custom_option_value_pkey" PRIMARY KEY ("product_custom_option_value_id")
);

-- CreateTable
CREATE TABLE "product_description" (
    "product_description_id" SERIAL NOT NULL,
    "product_description_product_id" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT,
    "short_description" TEXT,
    "url_key" VARCHAR NOT NULL,
    "meta_title" TEXT,
    "meta_description" TEXT,
    "meta_keywords" TEXT,

    CONSTRAINT "product_description_pkey" PRIMARY KEY ("product_description_id")
);

-- CreateTable
CREATE TABLE "product_image" (
    "product_image_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_image_product_id" INTEGER NOT NULL,
    "image" VARCHAR NOT NULL,

    CONSTRAINT "product_image_pkey" PRIMARY KEY ("product_image_id")
);

-- CreateTable
CREATE TABLE "setting" (
    "setting_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "value" TEXT,
    "is_json" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("setting_id")
);

-- CreateTable
CREATE TABLE "shipment" (
    "shipment_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "shipment_order_id" INTEGER NOT NULL,
    "carrier_name" VARCHAR,
    "tracking_number" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shipment_pkey" PRIMARY KEY ("shipment_id")
);

-- CreateTable
CREATE TABLE "shipping_method" (
    "shipping_method_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "shipping_method_pkey" PRIMARY KEY ("shipping_method_id")
);

-- CreateTable
CREATE TABLE "shipping_zone" (
    "shipping_zone_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,

    CONSTRAINT "shipping_zone_pkey" PRIMARY KEY ("shipping_zone_id")
);

-- CreateTable
CREATE TABLE "shipping_zone_method" (
    "shipping_zone_method_id" SERIAL NOT NULL,
    "method_id" INTEGER NOT NULL,
    "zone_id" INTEGER NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "cost" DECIMAL(12,4),
    "calculate_api" VARCHAR,
    "condition_type" VARCHAR,
    "max" DECIMAL(12,4),
    "min" DECIMAL(12,4),

    CONSTRAINT "shipping_zone_method_pkey" PRIMARY KEY ("shipping_zone_method_id")
);

-- CreateTable
CREATE TABLE "shipping_zone_province" (
    "shipping_zone_province_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "zone_id" INTEGER NOT NULL,
    "province" VARCHAR NOT NULL,

    CONSTRAINT "shipping_zone_province_pkey" PRIMARY KEY ("shipping_zone_province_id")
);

-- CreateTable
CREATE TABLE "tax_class" (
    "tax_class_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "tax_class_pkey" PRIMARY KEY ("tax_class_id")
);

-- CreateTable
CREATE TABLE "tax_rate" (
    "tax_rate_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "tax_class_id" INTEGER,
    "country" VARCHAR NOT NULL DEFAULT E'*',
    "province" VARCHAR NOT NULL DEFAULT E'*',
    "postcode" VARCHAR NOT NULL DEFAULT E'*',
    "rate" DECIMAL(12,4) NOT NULL,
    "is_compound" BOOLEAN NOT NULL DEFAULT false,
    "priority" INTEGER NOT NULL,

    CONSTRAINT "tax_rate_pkey" PRIMARY KEY ("tax_rate_id")
);

-- CreateTable
CREATE TABLE "user_token_secret" (
    "user_token_secret_id" SERIAL NOT NULL,
    "sid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR NOT NULL,
    "secret" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_token_secret_pkey" PRIMARY KEY ("user_token_secret_id")
);

-- CreateTable
CREATE TABLE "variant_group" (
    "variant_group_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "attribute_group_id" INTEGER NOT NULL,
    "attribute_one" INTEGER,
    "attribute_two" INTEGER,
    "attribute_three" INTEGER,
    "attribute_four" INTEGER,
    "attribute_five" INTEGER,
    "visibility" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "variant_group_pkey" PRIMARY KEY ("variant_group_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ADMIN_USER_UUID_UNIQUE" ON "admin_user"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ADMIN_USER_EMAIL_UNIQUE" ON "admin_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ATTRIBUTE_CODE_UUID_UNIQUE" ON "attribute"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ATTRIBUTE_CODE_UNIQUE" ON "attribute"("attribute_code");

-- CreateIndex
CREATE UNIQUE INDEX "ATTRIBUTE_GROUP_UUID_UNIQUE" ON "attribute_group"("uuid");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_LINK" ON "attribute_group_link"("attribute_id");

-- CreateIndex
CREATE INDEX "GROUP_LINK" ON "attribute_group_link"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "ATTRIBUTE_GROUP_LINK_UNIQUE" ON "attribute_group_link"("attribute_id", "group_id");

-- CreateIndex
CREATE UNIQUE INDEX "ATTRIBUTE_OPTION_UUID_UNIQUE" ON "attribute_option"("uuid");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_OPTION" ON "attribute_option"("attribute_id");

-- CreateIndex
CREATE UNIQUE INDEX "CART_UUID_UNIQUE" ON "cart"("uuid");

-- CreateIndex
CREATE INDEX "CART_SHIPPING_ZONE" ON "cart"("shipping_zone_id");

-- CreateIndex
CREATE UNIQUE INDEX "CART_ADDRESS_UUID_UNIQUE" ON "cart_address"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "CART_ITEM_UUID_UNIQUE" ON "cart_item"("uuid");

-- CreateIndex
CREATE INDEX "CART_ITEM" ON "cart_item"("cart_id");

-- CreateIndex
CREATE INDEX "CART_ITEM_PRODUCT" ON "cart_item"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "CATEGORY_UUID_UNIQUE" ON "category"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "CATEGORY_ID_UNIQUE" ON "category_description"("category_description_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "CATEGORY_URL_KEY_UNIQUE" ON "category_description"("url_key");

-- CreateIndex
CREATE INDEX "CATEGORY_DESCRIPTION" ON "category_description"("category_description_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "CMS_PAGE_UUID" ON "cms_page"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PAGE_ID_UNIQUE" ON "cms_page_description"("cms_page_description_cms_page_id");

-- CreateIndex
CREATE UNIQUE INDEX "URL_KEY_UNIQUE" ON "cms_page_description"("url_key");

-- CreateIndex
CREATE INDEX "CMS_PAGE_DESCRIPTION" ON "cms_page_description"("cms_page_description_cms_page_id");

-- CreateIndex
CREATE UNIQUE INDEX "COLLECTION_UUID_UNIQUE" ON "collection"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "COLLECTION_CODE_UNIQUE" ON "collection"("code");

-- CreateIndex
CREATE UNIQUE INDEX "COUPON_UUID_UNIQUE" ON "coupon"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "COUPON_UNIQUE" ON "coupon"("coupon");

-- CreateIndex
CREATE UNIQUE INDEX "CUSTOMER_UUID_UNIQUE" ON "customer"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EMAIL_UNIQUE" ON "customer"("email");

-- CreateIndex
CREATE INDEX "CUSTOMER_GROUP" ON "customer"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "CUSTOMER_ADDRESS_UUID_UNIQUE" ON "customer_address"("uuid");

-- CreateIndex
CREATE INDEX "CUSTOMER_ADDRESS" ON "customer_address"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "EVENT_UUID" ON "event"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "MODULE_UNIQUE" ON "migration"("module");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_UUID_UNIQUE" ON "order"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_NUMBER_UNIQUE" ON "order"("order_number");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_ACTIVITY_UUID_UNIQUE" ON "order_activity"("uuid");

-- CreateIndex
CREATE INDEX "ORDER_ACTIVITY" ON "order_activity"("order_activity_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_ADDRESS_UUID_UNIQUE" ON "order_address"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_ITEM_UUID_UNIQUE" ON "order_item"("uuid");

-- CreateIndex
CREATE INDEX "ORDER" ON "order_item"("order_item_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "PAYMENT_TRANSACTION_UUID_UNIQUE" ON "payment_transaction"("uuid");

-- CreateIndex
CREATE INDEX "PAYMENT_TRANSACTION_ORDER" ON "payment_transaction"("payment_transaction_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "UNQ_PAYMENT_TRANSACTION_ID_ORDER_ID" ON "payment_transaction"("payment_transaction_order_id", "transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_UUID_UNIQUE" ON "product"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_SKU_UNIQUE" ON "product"("sku");

-- CreateIndex
CREATE INDEX "PRODUCT_ATTRIBUTE_GROUP" ON "product"("group_id");

-- CreateIndex
CREATE INDEX "PRODUCT_VARIANT_GROUP" ON "product"("variant_group_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_ATTRIBUTE_VALUE_UUID_UNIQUE" ON "product_attribute_value_index"("uuid");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_OPTION_VALUE_LINK" ON "product_attribute_value_index"("option_id");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VALUE_LINK" ON "product_attribute_value_index"("attribute_id");

-- CreateIndex
CREATE INDEX "PRODUCT_ATTRIBUTE_LINK" ON "product_attribute_value_index"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "OPTION_VALUE_UNIQUE" ON "product_attribute_value_index"("product_id", "attribute_id", "option_id");

-- CreateIndex
CREATE INDEX "CATEGORY_PRODUCT_LINK" ON "product_category"("category_id");

-- CreateIndex
CREATE INDEX "PRODUCT_CATEGORY_LINK" ON "product_category"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_CATEGORY_UNIQUE" ON "product_category"("category_id", "product_id");

-- CreateIndex
CREATE INDEX "COLLECTION_PRODUCT_LINK" ON "product_collection"("collection_id");

-- CreateIndex
CREATE INDEX "PRODUCT_COLLECTION_LINK" ON "product_collection"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_COLLECTION_UNIQUE" ON "product_collection"("collection_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_CUSTOM_OPTION_UUID_UNIQUE" ON "product_custom_option"("uuid");

-- CreateIndex
CREATE INDEX "PRODUCT_CUSTOM_OPTION" ON "product_custom_option"("product_custom_option_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_CUSTOM_OPTION_VALUE_UUID_UNIQUE" ON "product_custom_option_value"("uuid");

-- CreateIndex
CREATE INDEX "CUSTOM_OPTION_VALUE" ON "product_custom_option_value"("option_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_ID_UNIQUE" ON "product_description"("product_description_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_URL_KEY_UNIQUE" ON "product_description"("url_key");

-- CreateIndex
CREATE INDEX "PRODUCT_DESCRIPTION" ON "product_description"("product_description_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCT_IMAGE_UUID_UNIQUE" ON "product_image"("uuid");

-- CreateIndex
CREATE INDEX "PRODUCT_IMAGE_LINK" ON "product_image"("product_image_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "SETTING_UUID_UNIQUE" ON "setting"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SETTING_NAME_UNIQUE" ON "setting"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPMENT_UUID_UNIQUE" ON "shipment"("uuid");

-- CreateIndex
CREATE INDEX "ORDER_SHIPMENT" ON "shipment"("shipment_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPPING_METHOD_UUID_UNIQUE" ON "shipping_method"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPPING_METHOD_NAME_UNIQUE" ON "shipping_method"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPPING_ZONE_UUID_UNIQUE" ON "shipping_zone"("uuid");

-- CreateIndex
CREATE INDEX "METHOD_ZONE" ON "shipping_zone_method"("method_id");

-- CreateIndex
CREATE INDEX "ZONE_METHOD" ON "shipping_zone_method"("zone_id");

-- CreateIndex
CREATE UNIQUE INDEX "METHOD_ZONE_UNIQUE" ON "shipping_zone_method"("zone_id", "method_id");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPPING_ZONE_PROVINCE_UUID_UNIQUE" ON "shipping_zone_province"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SHIPPING_ZONE_PROVINCE_PROVINCE_UNIQUE" ON "shipping_zone_province"("province");

-- CreateIndex
CREATE INDEX "SHIPPING_ZONE_PROVINCE" ON "shipping_zone_province"("zone_id");

-- CreateIndex
CREATE UNIQUE INDEX "TAX_CLASS_UUID_UNIQUE" ON "tax_class"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "TAX_RATE_UUID_UNIQUE" ON "tax_rate"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "TAX_RATE_PRIORITY_UNIQUE" ON "tax_rate"("priority", "tax_class_id");

-- CreateIndex
CREATE UNIQUE INDEX "USER_TOKEN_SID_UNIQUE" ON "user_token_secret"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "USER_TOKEN_SECRET_UNIQUE" ON "user_token_secret"("secret");

-- CreateIndex
CREATE UNIQUE INDEX "VARIANT_GROUP_UUID_UNIQUE" ON "variant_group"("uuid");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_GROUP_VARIANT" ON "variant_group"("attribute_group_id");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VARIANT_FIVE" ON "variant_group"("attribute_five");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VARIANT_FOUR" ON "variant_group"("attribute_four");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VARIANT_ONE" ON "variant_group"("attribute_one");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VARIANT_THREE" ON "variant_group"("attribute_three");

-- CreateIndex
CREATE INDEX "ATTRIBUTE_VARIANT_TWO" ON "variant_group"("attribute_two");

-- AddForeignKey
ALTER TABLE "attribute_group_link" ADD CONSTRAINT "attribute_group_link_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attribute_group_link" ADD CONSTRAINT "attribute_group_link_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "attribute_group"("attribute_group_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attribute_option" ADD CONSTRAINT "attribute_option_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_shipping_zone_id_fkey" FOREIGN KEY ("shipping_zone_id") REFERENCES "shipping_zone"("shipping_zone_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_description" ADD CONSTRAINT "category_description_category_description_category_id_fkey" FOREIGN KEY ("category_description_category_id") REFERENCES "category"("category_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cms_page_description" ADD CONSTRAINT "cms_page_description_cms_page_description_cms_page_id_fkey" FOREIGN KEY ("cms_page_description_cms_page_id") REFERENCES "cms_page"("cms_page_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "customer_group"("customer_group_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_address" ADD CONSTRAINT "customer_address_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_activity" ADD CONSTRAINT "order_activity_order_activity_order_id_fkey" FOREIGN KEY ("order_activity_order_id") REFERENCES "order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_order_item_order_id_fkey" FOREIGN KEY ("order_item_order_id") REFERENCES "order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment_transaction" ADD CONSTRAINT "payment_transaction_payment_transaction_order_id_fkey" FOREIGN KEY ("payment_transaction_order_id") REFERENCES "order"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "attribute_group"("attribute_group_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "TAX_CLASS" FOREIGN KEY ("tax_class") REFERENCES "tax_class"("tax_class_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_variant_group_id_fkey" FOREIGN KEY ("variant_group_id") REFERENCES "variant_group"("variant_group_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_attribute_value_index" ADD CONSTRAINT "product_attribute_value_index_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_attribute_value_index" ADD CONSTRAINT "product_attribute_value_index_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "attribute_option"("attribute_option_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_attribute_value_index" ADD CONSTRAINT "product_attribute_value_index_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_collection" ADD CONSTRAINT "product_collection_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collection"("collection_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_collection" ADD CONSTRAINT "product_collection_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_custom_option" ADD CONSTRAINT "product_custom_option_product_custom_option_product_id_fkey" FOREIGN KEY ("product_custom_option_product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_custom_option_value" ADD CONSTRAINT "product_custom_option_value_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "product_custom_option"("product_custom_option_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_description" ADD CONSTRAINT "product_description_product_description_product_id_fkey" FOREIGN KEY ("product_description_product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_image" ADD CONSTRAINT "product_image_product_image_product_id_fkey" FOREIGN KEY ("product_image_product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipment" ADD CONSTRAINT "shipment_shipment_order_id_fkey" FOREIGN KEY ("shipment_order_id") REFERENCES "order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipping_zone_method" ADD CONSTRAINT "shipping_zone_method_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "shipping_method"("shipping_method_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipping_zone_method" ADD CONSTRAINT "shipping_zone_method_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "shipping_zone"("shipping_zone_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipping_zone_province" ADD CONSTRAINT "shipping_zone_province_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "shipping_zone"("shipping_zone_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tax_rate" ADD CONSTRAINT "TAX_RATE_TAX_CLASS" FOREIGN KEY ("tax_class_id") REFERENCES "tax_class"("tax_class_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_five_fkey" FOREIGN KEY ("attribute_five") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_four_fkey" FOREIGN KEY ("attribute_four") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_one_fkey" FOREIGN KEY ("attribute_one") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_three_fkey" FOREIGN KEY ("attribute_three") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_two_fkey" FOREIGN KEY ("attribute_two") REFERENCES "attribute"("attribute_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variant_group" ADD CONSTRAINT "variant_group_attribute_group_id_fkey" FOREIGN KEY ("attribute_group_id") REFERENCES "attribute_group"("attribute_group_id") ON DELETE CASCADE ON UPDATE NO ACTION;

