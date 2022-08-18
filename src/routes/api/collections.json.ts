import { getAllCollections } from '$lib/utils/shopify';

export async function GET() {
    const response = await getAllCollections();
    
    return {
        body:{
            collections: await response.body.collections.edges,
        }
    }
}