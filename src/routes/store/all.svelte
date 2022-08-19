
<script lang="ts">
import type { Products, TagType } from "$lib/types";

import ProductCard from "$lib/components/Products/ProductCard.svelte";
import Tag from "$lib/components/Tag.svelte";

import { fade, fly } from "svelte/transition"
import { backInOut, quintInOut } from "svelte/easing";

export let products:Products = [];
export let typesList:[TagType];

let filteredProducts = products;

$: tagFilterName = 'all pottery';
$: tagFilterColor = '#EF493F'
$: filterProducts = products;

const tagFilterHandler = (typeName:string, typeColor:string) =>{
    if (typeName != 'all') {
        tagFilterName = typeName;
        tagFilterColor = typeColor;
        if (typeof products != undefined || typeof filteredProducts != undefined){
            filteredProducts = products.filter((product => {
                return product.productType === tagFilterName;
            }))
        }

    }
    else {
        tagFilterName = 'all pottery';
        tagFilterColor = '#EF493F';
        filteredProducts = products;
    }
};


</script>

<section class="relative h-[200px] md:h-[600px] flex justify-center items-center mb-5">
    <img class="h-full w-full object-cover z-0 object-center" src="/images/pottery.webp" alt="">
    {#key tagFilterName}
        <h2 
            class="text-tan font-extrabold tracking-wide w-full px-5 py-3 text-4xl absolute text-center"
            style="background-color: {tagFilterColor};"
            in:fly={{y:-100, easing: backInOut, duration:800}}
        >{tagFilterName}
        </h2>
    {/key}
    </section>
<a class="mx-[5%] text-brown text-xl font-bold underline" href="/store">View All</a>
<section class="mb-4 tags mx-[5%]">
    <div class="text-brown font-bold tracking-normal mt-5 text-xl">search for: <div>
    <div class="flex-wrap">
        <Tag text="lg" height="fit" width="fit" color='#EF493F' name='all' on:click={() => tagFilterHandler('all', '#EF493F')}/>
        {#each typesList as tag}
            <Tag text="lg" height="fit" width="fit" color={tag.color} name={tag.name} on:click={() => tagFilterHandler(`${tag.name}`, `${tag.color}`)}/>
        {/each}
    </div>
</section>
<hr class="w-[80%] border-brown border-1 m-auto mb-5"/>
<section in:fade="{{duration:600, easing:quintInOut}}"
class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-[5%]">
    {#key tagFilterName}
        {#each filteredProducts as product, i}
        <ProductCard {product} {typesList} {i}/>
        {/each}
    {/key}
</section>