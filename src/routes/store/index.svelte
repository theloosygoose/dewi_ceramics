<script lang="ts" context='module'>
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/products.json');
    
    const json_response = await response.json()


    return{
        status: response.status,
        props:{
            products: await json_response.products,
            typesList: await json_response.typesList,
        }
    }
    
}
</script>

<script lang="ts">
import type { Product, Products, TagType } from "$lib/types";
import Tag from "$lib/components/Tag.svelte";
import { fly, fade } from "svelte/transition"
import { cubicInOut, quintInOut } from "svelte/easing";
import Cart from "$lib/components/Cart/Cart.svelte";

export let products:Products;
export let typesList:[TagType];

let filteredProducts = products;

$: tagFilterName = 'all pottery';
$: tagFilterColor = '#EF493F'
$: filterProducts = products;

const tagFilterHandler = (typeName:string, typeColor:string) =>{
    if (typeName != 'all') {
        tagFilterName = typeName;
        tagFilterColor = typeColor;

        filteredProducts = products.filter((product => {
            return product.productType === tagFilterName;
        }))

    }
    else {
        tagFilterName = 'all pottery';
        tagFilterColor = '#EF493F';
        filteredProducts = products;
    }
};


</script>

<section class="bg-pottery-mobile-img bg-center bg-cover bg-no-repeat flex justify-center align-center">
    {#key tagFilterName}
    <h2 
        class="my-20 text-white italic font-extrabold tracking-wide px-5 py-3 text-4xl"
        style="background-color: {tagFilterColor};"
        in:fade="{{easing: quintInOut, duration:600}}"
    >{tagFilterName}</h2>
        
    {/key}

</section>
<section class="mb-5 tags">
    <div class="text-brown italic font-bold tracking-normal ml-2 mt-5 text-xl">tags:</div>
    <div class="mx-1 flex-wrap">
        <Tag color='#EF493F' name='all' on:click={() => tagFilterHandler('all', '#EF493F')}/>
        {#each typesList as tag}
            <Tag color={tag.color} name={tag.name} on:click={() => tagFilterHandler(`${tag.name}`, `${tag.color}`)}/>
        {/each}
    </div>

</section>
{#key tagFilterName}
    {#each filteredProducts as product, i}
        <div in:fade="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
            <p>{product.id}</p>
            <p>{product.title}</p>
            <img loading='lazy' class="h-20" src="{product.imageSrc}" alt="">
            <p>${product.price}</p>
            <p>{product.productType}</p>
        </div>
    {/each}
{/key}
