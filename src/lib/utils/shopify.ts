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
                        transformedSrc(preferredContentType: WEBP, crop: CENTER, maxHeight: 256)
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
                  variants(first: 1) {
                    edges {
                      node {
                        quantityAvailable
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables:{}
    })
}

export async function getAllCollections() {
  return postToShopify({
    query: `
    query getAllCollections{
      collections(first: 10) {
        edges {
          node {
            image {
              transformedSrc(preferredContentType: WEBP, maxHeight: 800, crop: CENTER)
            }
            handle
            id
            title
          }
        }
      }
    }`,
    variables: {}
  });
}

export async function loadCart(cartId:string) {
    return postToShopify({
      query: `
      query GetCart($cartId: ID!) {
        cart(id: $cartId) {
          checkoutUrl
            estimatedCost {
                totalAmount {
                amount
                }
                subtotalAmount{
                  amount
                }
            }
            lines(first: 100) {
                edges {
                node {
                    id
                    quantity
                    estimatedCost {
                    subtotalAmount {
                        amount
                        currencyCode
                    }
                    totalAmount {
                        amount
                        currencyCode
                    }
                    }
                    merchandise {
                    ... on ProductVariant {
                        id
                        title
                        product {
                            images(first: 1) {
                                edges {
                                  node {
                                    transformedSrc(preferredContentType: WEBP, maxHeight: 100, crop: CENTER)
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
              collections(first: 10) {
                edges {
                  node {
                    title
                    handle
                  }
                }
              }
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

export async function addToCart({ cartId, variantId }: {cartId:any,variantId:any}) {
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
          merchandiseId: variantId,
          quantity: 1
        }
      ]
    }
  });
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

export async function getCollectionItems(handle:string) {
  return postToShopify({
      query:`
      query getCollectionItems($handle: String!) {
        collection(handle: $handle) {
          handle
          description
          title
          image {
            transformedSrc(preferredContentType: WEBP, maxHeight: 500, crop: CENTER)
          }
          products(first: 100) {
            edges {
              node {
                totalInventory
                title
                productType
                handle
                images(first: 1) {
                  edges {
                    node {
                      transformedSrc(maxHeight: 300, crop: CENTER, preferredContentType: WEBP)
                    }
                  }
                }
                priceRange {
                  minVariantPrice {
                    amount
                  }
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

export async function getReccomendedProducts(productId:string){
  return postToShopify({
    query:`
    query reccomendationsQuery($productId: ID!) {
      productRecommendations(productId: $productId) {
        images(first: 1) {
          edges {
            node {
              transformedSrc(maxHeight: 300, preferredContentType: WEBP)
            }
          }
        }
        title
        productType
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
      }
    }
    `,
    variables: {productId}
  })
}