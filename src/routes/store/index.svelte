
<script lang="ts">
import type { Products, TagType } from "$lib/types";

import ProductCard from "$lib/components/Products/ProductCard.svelte";
import Tag from "$lib/components/Tag.svelte";

import { fade } from "svelte/transition"
import { quintInOut } from "svelte/easing";

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

<section class="min-h-[300px] md:h-[600px] bg-pottery-mobile-img bg-center bg-cover bg-no-repeat flex justify-center items-center">
    {#key tagFilterName}
    <h2 
        class="h-fit text-white italic font-extrabold tracking-wide px-5 py-3 text-4xl"
        style="background-color: {tagFilterColor};"
        in:fade="{{easing: quintInOut, duration:600}}"
    >{tagFilterName}</h2>
        
    {/key}

</section>
<section class="mb-4 tags mx-[5%]">
    <div class="text-brown italic font-bold tracking-normal mt-5 text-xl">search for: <div>
    <div class="flex-wrap">
        <Tag color='#EF493F' name='all' on:click={() => tagFilterHandler('all', '#EF493F')}/>
        {#each typesList as tag}
            <Tag color={tag.color} name={tag.name} on:click={() => tagFilterHandler(`${tag.name}`, `${tag.color}`)}/>
        {/each}
    </div>
</section>
<hr class="w-[80%] border-brown border-1 m-auto mb-5"/>
<section in:fade="{{duration:600, easing:quintInOut}}"
class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-[5%]">
    {#key tagFilterName}
        {#each filteredProducts as product, i}
        <ProductCard {product} {i}/>
        {/each}
    {/key}
</section>