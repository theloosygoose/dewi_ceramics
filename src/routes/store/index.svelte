<script lang="ts" context='module'>
import { getAllProducts } from '$lib/utils/shopify';
import type { Product, Products } from '$lib/types';

export async function load() {
    const res = await getAllProducts()

    const products = await res.body.products.edges.map((product: 
    { node: { 
        id: any; 
        title: any; 
        handle: any; 
        priceRange: { 
            minVariantPrice: { 
                amount: any; 
            }; 
        }; 
        images: { 
            edges: { 
                node: { 
                    src: any; 
                }; 
            }[]; 
        }; 
        tags: any; 
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

    return{
        status: res.status,
        props:{
            products
        }
    }
    
}
</script>

<script lang="ts">

export let products:Products;
console.log(products)

</script>


{#each products as product}
<div class="overflow-x-hidden">
    <p>{product.id}</p>
    <p>{product.title}</p>
    <img class="h-20" src="{product.imageSrc}" alt="">
    <p>${product.price}</p>
</div>
{/each}
