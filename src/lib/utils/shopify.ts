// just a function to fetch the shopify end point moving this here to clean up code

export const postToShopify = async ({query, variables={}}: { query: string; variables: object;}) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}`, {
            method: 'POST',
            headers: {
                'X-Shopify-Storefront-Access-Token':`${import.meta.env.VITE_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables}),
        })
        .then((res) => res.json());
        return{
            status: response.status,
            body: await response.data
        }
        

    } catch (error) {
        console.log('Oopsy Daisy!', error) 
        return{
            status: 500,
            error: 'Error Reciving Data' 
        };
    }

}

export async function getAllProducts() {
    return postToShopify({
        query:`
        query get100Products {
            products(first: 100) {
              edges {
                node {
                  description
                  handle
                  id
                  images(first: 1) {
                    edges {
                      node {
                        src
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  productType
                  title
                }
              }
            }
          }
        `,
        variables:{}
    })
}

export async function loadCart(cartId:string) {
    return postToShopify({
        query:`
        query getCart($cartid: ID!) {
            cart(id: $cartid) {
              checkoutUrl
              createdAt
              id
              lines(first: 20) {
                edges {
                  node {
                    merchandise {
                      ... on ProductVariant {
                        id
                        price
                        availableForSale
                        quantityAvailable
                        title
                        product {
                          images(first: 1) {
                            edges {
                              node {
                                src
                              }
                            }
                          }
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables:{ cartId }
    })
    
}

export async function getProduct(handle:string) {
    return postToShopify({
        query:`
        query getProduct($handle: String!) {
            product(handle: $handle) {
              availableForSale
              createdAt
              description
              id
              handle
              title
              productType
              images(first: 5) {
                edges {
                  node {
                    src
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    title
                    weight
                    unitPrice {
                      amount
                    }
                    price
                    image {
                      src
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {handle}
    })
}

export async function createCart() {
    return postToShopify({
        query:`
        mutation createCart {
            cartCreate(input: {}) {
              cart {
                checkoutUrl
                id
              }
            }
          }
        `,
        variables:{}
    });
}

export async function updateCart({cartId, lineId, variantId, quantity}:{cartId:string, lineId:string, variantId:string, quantity:number}) {
    return postToShopify({
        query:`
        mutation createCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
            cartLinesUpdate(cartId: $cartId, lines: $lines) {
              userErrors {
                field
                message
                code
              }
            }
          }
        `,
        variables:{
            cartId: cartId,
            lines: [
                {
                    id:lineId,
                    merchandiseId: variantId,
                    quantity: quantity
                }
            ]
        }
    });
}

export async function addToCart({cartId, variantId}:{cartId:string, variantId:string}) {
    return postToShopify({
        query: `
            mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
                cartLinesAdd(cartId: $cartId, lines: $lines) {
                    cart {
                    lines(first: 100) {
                        edges {
                        node {
                            id
                            quantity
                            merchandise {
                            ... on ProductVariant {
                                product {
                                title
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                }
            }
        `,
        variables: {
            cartId: cartId,
            lines: [
                {
                    merchandiseId:variantId,
                    quantity: 1
                }
            ]
        }
    })
} 

export async function getTypes(){
  return postToShopify({
    query: `
    {
      productTypes(first: 10) {
        edges {
          node
        }
      }
    }
    
  `,
  variables: {}
  })
}