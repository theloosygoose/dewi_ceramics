import { getProduct} from "$lib/utils/shopify";

export async function GET({params}:{handle:string}){
    console.log(params.handle)
    const res:any = await getProduct(`${params.handle}`);
    
    const singleProduct = await res.body.product;

    if(singleProduct){
        return {
            body: {
                singleProduct:await singleProduct
            }
        };
    }
}