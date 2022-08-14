import ProductCard from "$lib/components/Products/ProductCard.svelte";
import { getProduct, getTypes} from "$lib/utils/shopify";

export async function GET({params}:{handle:string}){
    const res:any = await getProduct(`${params.handle}`);
    
    const resSingleProduct = await res.body.product;

    const singleProduct = await {
        title: resSingleProduct.title,
        id: resSingleProduct.id,
        images: resSingleProduct.images.edges,
        handle: resSingleProduct.handle,
        description: resSingleProduct.description,
        variantId: resSingleProduct.variants.edges[0].node.id,
        price: resSingleProduct.variants.edges[0].node.price,
        productType: resSingleProduct.productType
    } 

    const res_types = await getTypes();
    const typesList = await res_types.body.productTypes.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['#5A85F1', '#58CB4E', '#D945C1', '#FE794F', '#49C1AC', '#5F4ECB'];
        return {
            name: tag.node,
            color: colors[i]
        }
    });

   const productType = typesList.filter((type: { name: any; }) => {
        return type.name === singleProduct.productType
   }) 

    if(singleProduct){
        return {
            body: {
                singleProduct: await singleProduct,
                productType: await productType[0],
            }
        };
    }
}