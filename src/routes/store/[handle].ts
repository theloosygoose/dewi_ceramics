import { getProduct, getReccomendedProducts, getTypes} from "$lib/utils/shopify";

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
        collections: resSingleProduct.collections.edges,
        productType: resSingleProduct.productType
    } 


    const resReccomendations = await getReccomendedProducts(singleProduct.id);
    const reccomendations = await resReccomendations.body.productRecommendations.map((product) => {
        return{
            title: product.title,
            imageSrc: product.images.edges[0].node.transformedSrc,
            price: product.priceRange.minVariantPrice.amount,
            handle: product.handle,
            productType: product.productType
        }
    })

    const res_types = await getTypes();
    const typesList = await res_types.body.productTypes.edges.map((tag: { node: string; }, i: number) =>{
        const colors = ['#df2228','#EB6424', '#359C49', '#3569B4', '#F1DB18', '#F497DA', '#58355E'];
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
                reccomendations: await reccomendations,
                typesList: await typesList,
            }
        };
    }
}