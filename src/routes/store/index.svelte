<script lang="ts" context="module">

export async function load({ fetch }){
    const res = await fetch('/api/collections.json');
    const collections = await res.json()


    return {
        props: {
            collections: await collections.collections
        } 
    } 
}
</script>

<script lang="ts">
    import { fly } from "svelte/transition";
    import { quartOut } from "svelte/easing";
    import CollectionCard from "$lib/components/Cards/CollectionCard.svelte";


    export let collections:any;
</script>
<svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:url" content="www.dewiceramics.netlify.app/store">
    <meta property="og:title" content="Dewi Ceramics Store">
    <meta property="og:description" content="Look at All Dewi Ceramics Products or Browse Collections">
    <meta property="og:image" content="/icons/logolarge.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="www.dewiceramics.netlify.app/store">
    <meta property="twitter:title" content="Dewi Ceramics Store">
    <meta property="twitter:description" content="Look at All Dewi Ceramics Products or Browse Collections">
    <meta property="twitter:image" content="/icons/logolarge.png">
 </svelte:head>

<div class="overflow-x-hidden overflow-y-hidden">
    <div class="flex-col">
        <div class="bg-brown mt-5">
            <a sveltekit:prefetch href="/store/all" class=" md:mx-[15%] grid grid-cols-2 bg-brown">
                <div in:fly="{{x:-1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="h-full grid grid-rows-2 justify-end items-start my-5 mr-[10%] md:mr-[20%] lg:mt-[20%]">
                    <h1 class="text-tan text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-[1]">ALL <br> PRODUCTS</h1>
                    <p class="text-tan text-sm sm:text-lg  font-medium leading-[1]">Click Here to Browse<br>All Products</p>
                </div>
                <div in:fly="{{x:1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="w-full bg-no-repeat bg-center bg-cover bg-pottery-mobile-img max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] justify-self-end ">
                </div>
            </a>
        </div>
        <h1 class="text-center text-lg sm:text-2xl md:text-3xl lg:text-6xl text-brown font-bold tracking-wide underline my-4">COLLECTIONS</h1>
        <div class="mx-5 mt-5 grid md:grid-cols-3 grid-cols-2 grid-auto-rows-[3fr] gap-4">
            {#each collections as collection, i}
            <CollectionCard {collection} />
            {/each}
        </div>
    </div>
</div>