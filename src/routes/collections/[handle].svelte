<script lang="ts">
    import ProductCard from "$lib/components/Cards/ProductCard.svelte";
    import type { Product, TagType } from "$lib/types";
    import { fade } from "svelte/transition";
    import { quintInOut } from "svelte/easing";

    export let collectionProducts:Array<Product>;
    export let collectionDetails:any;
    export let typesList:[TagType];

</script>

<section class="relative h-[150px] md:h-[400px] flex justify-center items-center mb-8">
    <img class="h-full w-full object-cover z-0 object-center" src="{collectionDetails.image.transformedSrc}" alt="">
    <h1 class="absolute text-3xl md:text-6xl bg-green text-tan px-5 py-2 tracking-wide font-extrabold">{collectionDetails.title}</h1>
</section>
<section class="flex justify-center items-center w-full">
    <p class="text-brown font-lg ml-4 font-medium max-w-prose self-center">{collectionDetails.description}</p>
</section>

<section in:fade="{{duration:600, easing:quintInOut}}"
class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-[5%] my-11">
        {#each collectionProducts as product, i}
        <ProductCard {product} {typesList} {i}/>
        {/each}
</section>

<a href="/collections" class="text-underline text-lg text-brown font-bold underline">View All Collections</a>