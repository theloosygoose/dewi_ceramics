import { createCart, addToCart, updateCart } from '$lib/utils/shopify';

export async function POST() {
  await createCart();

  return {
    body: { data: {} }
  };
}

export async function PUT({ request }: {request:any}) {
  const body = await request.json();
  const response = await updateCart(body);

  return {
    body: { data: response.body.data }
  };
}

export async function PATCH({ request }: {request:any}) {
  const body = await request.json();
  const response = await addToCart(body);

  return {
    body: { data: response.body.data }
  };
}