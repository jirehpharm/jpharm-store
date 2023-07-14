import { Request, Response } from "express";

import prisma from "../../utils/prisma";
import {
  randNumber,
  randEmail,
  randUser,
  randImg,
  randMotorcylceManufacturer,
  randParagraph,
  randPhrase,
  randText,
  randUrl,
} from "@ngneat/falso";

/**
 * Returns a list of products with their descriptions.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Promise<void>
 */

// Use this route to populate data in the database: http://localhost:4001/datafix/populate
// Edit count as per your requirement
const populateCount = 50;

const oneNumber: any = randNumber({ min: 0, max: 2 });

const randData: any = {
  fourNumber: randNumber({ min: 1000, max: 9999 }),
  twoNumber: randNumber({ min: 10, max: 99 }),
  oneNumber: randNumber({ min: 0, max: 9 }),
  tenNumber: randNumber({ min: 9000000000, max: 9999999999 }),
  fiveNumber: randNumber({ min: 10000, max: 99999 }),
  email: randEmail(),
  name: randUser(),
  boolean: oneNumber === 1,
  image: randImg(),
  paragraph: randParagraph(),
  phase: randPhrase(),
  text: randText(),
};

export const populateData = async (
  req: Request,
  res: Response<{ status: boolean; message?: string }>
): Promise<void> => {
  try {
    let errorCount = 0;
    for (let i = 1; i <= populateCount; i++) {
      try {
        const customer = await createCustomer();
        const cart = await createCartItems();
        const cartAddress = await createCartAddress();
        const order = await createOrder({
          customer_id: customer.customer_id,
          customer_email: customer.email,
          customer_full_name: customer.full_name,
          cart_id: cart.cart_id,
        });
        const product = await createProduct();
        const orderItem = await createOrderItem({
          order_item_order_id: order.order_id,
          product_id: product.product_id,
          product_sku: product.sku,
          product_name: product.product_description.name,
          product_price: product.price,
          product_weight: product.weight,
        });
        console.log("Created Count:", i);
      } catch (e) {
        console.log(e);
        errorCount++;
      }
      console.log("Error Count:", errorCount);
    }

    res.status(200).json({
      status: true,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

async function createCustomer() {
  const email = randEmail();
  const name = randUser();
  try {
    const customer = await prisma.customer.create({
      data: {
        status: oneNumber,
        group_id: 1,
        email: email,
        password: "123456",
        full_name: name.username,
      },
    });

    return customer;
  } catch (error) {
    console.error("Error creating customer:", error);
    return error;
  }
}

async function createCartItems() {
  const cartItems = await prisma.cart.create({
    data: {
      currency: "USD",
      status: randData.boolean,
      sub_total: randData.fourNumber,
      total_qty: randData.twoNumber,
      tax_amount: randData.twoNumber,
      grand_total: randData.fourNumber,
    },
  });
  return cartItems;
}

async function createCartAddress() {
  try {
    const cartAddress = await prisma.cart_address.create({
      data: {
        full_name: randData.name.username,
        postcode: randData.fiveNumber.toString(),
        telephone: randData.tenNumber.toString(),
        country: randData.name.address.country,
        province: "Province",
        city: randData.name.address.city,
        address_1: randData.name.address.street,
        address_2: randData.name.address.street,
      },
    });
    return cartAddress;
  } catch (error) {
    console.error("Error creating cart address:", error);
    return error;
  }
}

async function createOrder({
  cart_id,
  customer_id,
  customer_email,
  customer_full_name,
}) {
  const oneNumber = randNumber({ min: 0, max: 99999 });
  try {
    const order = await prisma.order.create({
      data: {
        order_number: oneNumber.toString(),
        cart_id,
        currency: "USD",
        customer_id,
        customer_email,
        customer_full_name,
        shipping_fee_excl_tax: randData.twoNumber,
        shipping_fee_incl_tax: randData.twoNumber,
        discount_amount: randData.twoNumber,
        sub_total: randData.fourNumber,
        total_qty: randData.oneNumber,
        total_weight: randData.oneNumber,
        tax_amount: randData.twoNumber,
        shipping_note: "Special instructions for shipping",
        grand_total: randData.fourNumber,
        shipment_status: "Under shipping",
        payment_status: "refunded",
        payment_method: "credit_card",
        shipping_address_id: 1,
      },
    });

    return order;
  } catch (error) {
    console.error("Error creating order:", error);
    return error;
  }
}

async function createOrderItem({
  order_item_order_id,
  product_id,
  product_sku,
  product_name,
  product_price,
  product_weight,
}) {
  const twoNumber = randNumber({ min: 10, max: 99 });
  const oneNumber: any = randNumber({ min: 0, max: 9 });
  const fourNumber = randNumber({ min: 1000, max: 9999 });

  try {
    const orderItem = await prisma.order_item.create({
      data: {
        order_item_order_id,
        product_id,
        product_sku,
        product_name,
        product_weight,
        product_price,
        product_price_incl_tax: randData.twoNumber,
        qty: oneNumber,
        final_price: twoNumber,
        final_price_incl_tax: fourNumber,
        tax_percent: twoNumber,
        tax_amount: oneNumber,
        discount_amount: oneNumber,
        total: fourNumber,
      },
    });

    return orderItem;
  } catch (error) {
    console.error("Error creating order item:", error);
    return error;
  }
}

async function createProduct() {
  const twoNumber = randNumber({ min: 10, max: 9999 });
  const threeNumber = randNumber({ min: 10, max: 99999 });
  const sku = `${twoNumber}_${threeNumber}`;
  const text = randText();
  const url = randUrl();
  const url_key = `${text}_${url}`;
  const oneNumber: any = randNumber({ min: 0, max: 2 });
  const boolean = oneNumber === 1;
  const productName = randMotorcylceManufacturer();

  try {
    const product = await prisma.product.create({
      data: {
        type: "simple",
        visibility: boolean,
        image:
          "/catalog/2898/6093/6b237ddc-f894-4dfd-a474-2435f93e6611_600x.webp",
        sku,
        price: randData.fourNumber,
        qty: oneNumber,
        weight: randData.oneNumber,
        manage_stock: boolean,
        stock_availability: randData.boolean,
        status: boolean,
        product_description: {
          create: {
            name: productName,
            description: randData.paragraph,
            short_description: randData.phase,
            url_key,
            meta_title: "Meta Title",
            meta_description: randData.phase,
            meta_keywords: "Meta Keywords",
          },
        },
      },
      include: {
        product_description: true,
      },
    });

    return product;
  } catch (error) {
    console.log("Error creating product:", error);
  }
}
