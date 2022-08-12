<script lang="ts" context='module'>
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/products.json');
    
    const json_response = await response.json()


    return{
        status: response.status,
        props:{
            products: await json_response.products,
            tags: await json_response.tags
        }
    }
    
}
</script>

<script lang="ts">
import type { Products } from "$lib/types";

export let products:Products;
export let tags:any;

let tagFilter = 'all products';

let tagFilterHandler = () =>{

}

</script>

<section class="bg-pottery-mobile-img bg-center bg-cover bg-no-repeat flex justify-center align-center">
    <h2 class="my-20 bg-red text-white italic font-extrabold tracking-normal px-5 py-3 text-4xl">{tagFilter}</h2>
</section>
<section class="tags">
    <div class="text-brown italic font-bold tracking-normal p-5 pb-2 text-lg">tags:</div>
    <div class="flex-wrap">
        {#each tags as tag}
        <button class='text-center pl-2 pr-3 ml-2 mb-4 italic font-bold tracking-normal bg-{tag.color} text-white'>{tag.name}</button>
        {/each}
    </div>

</section>

{#each products as product}
<div class="overflow-x-hidden">
    <p>{product.id}</p>
    <p>{product.title}</p>
    <img loading='lazy' class="h-20" src="{product.imageSrc}" alt="">
    <p>${product.price}</p>
</div>
{/each}
