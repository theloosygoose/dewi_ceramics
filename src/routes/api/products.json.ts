import type { RequestHandler } from "@sveltejs/kit";
import { getAllProducts, getTags } from '$lib/utils/shopify';
import type { Product } from '$lib/types';

export const GET: RequestHandler = async () => {
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
                    src: string; 
                }; 
            }[]; 
        }; 
        tags: []; 
    }; }):Product => {
        return {
            id: product.node.id,
            title: product.node.title,
            handle: product.node.handle,
            price: product.node.priceRange.minVariantPrice.amount,
            imageSrc: product.node.images.edges[0].node.src,
            tags: product.node.tags
        }
    })

    const res_tags = await getTags();
    const tags = await res_tags.body.productTags.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['red', 'blue', 'green', 'magenta', 'orange', 'teal'];
        return {
            name: tag.node,
            color: colors[i]
        }
    })
    return{
        status: res_products.status,
        body:{
            products: await products,
            tags: await tags
        }
    }
}