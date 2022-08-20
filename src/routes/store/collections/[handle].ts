import { getCollectionItems, getTypes } from "$lib/utils/shopify"
import type { Product } from "$lib/types";

export async function GET({ params }) {
    const res = await getCollectionItems(`${params.handle}`);

    const collectionDetails = res.body.collection;

    const collectionProducts = res.body.collection.products.edges.map((product: { node: { handle: any; priceRange: { minVariantPrice: { amount: any; }; }; productType: any; images: { edges: { node: { transformedSrc: any; }; }[]; }; title: any; totalInventory: any; }; }) =>{ return {
            handle: product.node.handle,
            price: product.node.priceRange.minVariantPrice.amount,
            productType: product.node.productType,
            imageSrc: product.node.images.edges[0].node.transformedSrc,
            title: product.node.title,
            quantity: product.node.totalInventory
        }
    }).filter((product:Product) => product.quantity != 0)

    const res_types = await getTypes();
    const typesList = await res_types.body.productTypes.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['#EB6424', '#359C49', '#3569B4', '#F1DB18', '#F497DA', '#58355E'];
        return {
            name: tag.node,
            color: colors[i]
        }
    });



    return {
        body:{
            collectionDetails,
            collectionProducts,
            typesList
        }
    }
}