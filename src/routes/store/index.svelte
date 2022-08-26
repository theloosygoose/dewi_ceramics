<script lang="ts">
import type { Products, TagType } from "$lib/types";

import ProductCard from "$lib/components/Cards/ProductCard.svelte";
import Tag from "$lib/components/Tag.svelte";

import { fade, fly } from "svelte/transition"
import { backInOut, quintInOut } from "svelte/easing";

export let products:Products = [];
export let typesList:[TagType];

let filteredProducts = products;

$: tagFilterName = 'All pottery';
$: tagFilterColor = '#47291c'
$: filterProducts = products;

const tagFilterHandler = (typeName:string, typeColor:string) =>{
    if (typeName != 'All') {
        tagFilterName = typeName;
        tagFilterColor = typeColor;
        if (typeof products != undefined || typeof filteredProducts != undefined){
            filteredProducts = products.filter((product => {
                return product.productType === tagFilterName;
            }))
        }

    }
    else {
        tagFilterName = 'All Pottery';
        tagFilterColor = '#47291c';
        filteredProducts = products;
    }
};


</script>
<svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:url" content="www.dewiceramics.netlify.app/store">
    <meta property="og:title" content="Dewi Ceramics Shop All">
    <meta property="og:description" content="Browse the entire Dewi Ceramics Collection">
    <meta property="og:image" content="/icons/logolarge.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="www.dewiceramics.netlify.app/store">
    <meta property="twitter:title" content="Dewi Ceramics Shop All">
    <meta property="twitter:description" content="Browse the entire Dewi Ceramics Collection">
    <meta property="twitter:image" content="/icons/logolarge.png">
</svelte:head>

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
<section class="mb-4 tags mx-[5%]">
    <div class="text-brown font-bold tracking-normal mt-5 text-xl">search for: <div>
    <div class="flex-wrap">
        <Tag extras="px-1 hover:opacity-80" text="lg" color='#47291c' name='All' on:click={() => tagFilterHandler('All', '#DF2228')}/>
        {#each typesList as tag}
            <Tag extras="ml-2 px-1 hover:opacity-80" text="lg" color={tag.color} name={tag.name} on:click={() => tagFilterHandler(`${tag.name}`, `${tag.color}`)}/>
        {/each}
    </div>
</section>
<hr class="w-[80%] border-brown border-1 m-auto mb-5"/>
<section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 mx-[5%]">
    {#key tagFilterName}
        {#each filteredProducts as product, i}
        <ProductCard {product} {typesList} {i}/>
        {/each}
    {/key}
</section>