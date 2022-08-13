
<script lang="ts">
import type { Products, TagType } from "$lib/types";

import ProductCard from "$lib/components/Products/ProductCard.svelte";
import Tag from "$lib/components/Tag.svelte";

import { fade } from "svelte/transition"
import { quintInOut } from "svelte/easing";

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

<section class="min-h-[300px] md:h-[600px] bg-pottery-mobile-img bg-center bg-cover bg-no-repeat flex justify-center items-center">
    {#key tagFilterName}
    <h2 
        class="h-fit text-white italic font-extrabold tracking-wide px-5 py-3 text-4xl"
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
<section in:fade="{{duration:600, easing:quintInOut}}">
    {#key tagFilterName}
        {#each filteredProducts as product, i}
        <ProductCard {product} {i}/>
        {/each}
    {/key}
</section>