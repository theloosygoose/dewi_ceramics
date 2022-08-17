import { getAllProducts, getTypes } from '$lib/utils/shopify';
import type { Product } from '$lib/types';

export async function GET() {
    const res_products = await getAllProducts()
    const products = await res_products.body.products.edges.map((product: 
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
    }; }):Product => {
        return {
            id: product.node.id,
            title: product.node.title,
            handle: product.node.handle,
            price: product.node.priceRange.minVariantPrice.amount,
            imageSrc: product.node.images.edges[0].node.transformedSrc,
            productType: product.node.productType,
        }
    })

    const res_types = await getTypes();
    const types_list = await res_types.body.productTypes.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['#5A85F1', '#5bad53', '#D945C1', '#FE794F', '#49C1AC', '#5F4ECB'];
        return {
            name: tag.node,
            color: colors[i]
        }
    });
    return{
        status: res_products.status,
        body:{
            products: await products,
            typesList: await types_list 
        }
    }
}