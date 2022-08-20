import { getAllProducts, getTypes } from '$lib/utils/shopify';
import type { Product } from '$lib/types';

export async function GET() {
    const res_products = await getAllProducts()
    const raw_products = await res_products.body.products.edges.map((product: 
    { node: {
        id: string; 
        title: string; 
        handle: string; 
        priceRange: { 
            minVariantPrice: { 
                amount: string; 
            }; 
        }; 
        images: { 
            edges: { 
                node: { 
                    transformedSrc: string; 
                }; 
            }[]; 
        }; 
        productType:string;
        variants:{
            edges:{
                node:{
                    quantityAvailable:number;
                };
            }[];
        };
    }; }):Product => {
        return {
            id: product.node.id,
            title: product.node.title,
            handle: product.node.handle,
            price: product.node.priceRange.minVariantPrice.amount,
            imageSrc: product.node.images.edges[0].node.transformedSrc,
            productType: product.node.productType,
            quantity: product.node.variants.edges[0].node.quantityAvailable
        }
    })
    //Filter Out Products with Quantity Less than 0
    const products = raw_products.filter((product:Product) => product.quantity != 0)

    //Get All Types that Exist in the Store and Assign each with Color Array
    const res_types = await getTypes();
    const types_list = await res_types.body.productTypes.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['#5A85F1', '#5bad53', '#D945C1', '#FE794F', '#49C1AC', '#5F4ECB'];
        return {
            name: tag.node,
            color: colors[i]
        }
    });
    //Return array of Products and array of types
    return{
        status: res_products.status,
        body:{
            products: await products,
            typesList: await types_list 
        }
    }
}