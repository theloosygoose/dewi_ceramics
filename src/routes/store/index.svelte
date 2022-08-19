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


    export let collections:any;
    console.log(collections)
</script>

<div class="overflow-x-hidden overflow-y-hidden">
    <h1 class="text-5xl md:text-6xl lg:text-7xl text-brown font-extrabold tracking-normal text-center underline">STORE</h1>
    <div class="flex-col">
        <div class="bg-red mt-5">
            <a sveltekit:prefetch href="/store/all" class=" md:mx-[15%] grid grid-cols-2 bg-red">
                <div in:fly="{{x:-1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="h-full grid grid-rows-2 justify-end items-start my-5 mr-[10%] md:mr-[20%] lg:mt-[20%]">
                    <h1 class="text-tan text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-[1]">ALL <br> PRODUCTS</h1>
                    <p class="text-tan text-sm sm:text-lg  font-medium leading-[1]">Click Here to Browse<br>All Products</p>
                </div>
                <div in:fly="{{x:1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="w-full bg-no-repeat bg-center bg-cover bg-pottery-mobile-img max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] justify-self-end ">
                </div>
            </a>
        </div>
        <h1 class="text-center text-4xl text-brown font-bold tracking-wide underline my-4">COLLECTIONS</h1>
        <div class="mx-5 mt-5 grid md:grid-cols-3 grid-cols-2 grid-auto-rows-[3fr] gap-4">
            {#each collections as collection, i}
                <div class="w-full">
                    <a href="/store/collections/{collection.node.handle}">
                        <div style="background-image:url('{collection.node.image.transformedSrc}')" class="bg-no-repeat bg-cover bg-top h-[300px] relative">
                            <div class="bg-orange absolute bottom-0">
                                <h3 class="font-extrabold px-2 py-2 text-lg sm:text-2xl md:text-3xl text-left tracking-wide text-tan leading-[1]">{collection.node.title}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>