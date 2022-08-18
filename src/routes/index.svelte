<script lang="ts" context="module">
    export async function load({ fetch }) {

        const res = await fetch('/api/collections.json')
        const collections = await res.json()

        return {
            props:{
                collections: await collections.collections
            }
        }
        
    }

</script>
<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let collections:any 
    
    let scroll:number;
    let ready = false;
    onMount(() => {
        ready = true;
    })
</script>


<svelte:window bind:scrollY={scroll}/>
<div class="lg:bg-hero-desktop-img bg-hero-mobile-img bg-center bg-no-repeat bg-cover w-full h-[400px] md:h-[600px] lg:h-[80vh] flex items-end justify-left overflow-hidden">
    {#if ready}
        <h1 class="relative z-0 pl-5 pb-5 text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-normal leading-[0.78] text-white drop-shadow-lg"
            style:transform={`translate3d(0, -${scroll*1.2}px, 0)`}
            in:fly="{{y:50, delay:500, duration:700}}">
                    DEWI <br> CERAMICS 
        </h1>        
    {/if}
</div>

<section class="flex-col">
    <a sveltekit:prefetch href="/store">
        <div class="mt-5 lg:bg-store-desktop-img bg-store-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
            <div class="bg-red w-fit">
                <p class="font-extrabold   py-2 px-6 text-5xl tracking-wide text-tan">store.</p>
            </div>
        </div>
    </a>
    <div class="mx-5 mt-5">
        <h1 class="mx-auto w-full bg-product text-brown font-extrabold  text-4xl md:text-5xl lg:text-7xl text-center tracking-normal leading-[1]">FEATURED <br> COLLECTIONS</h1>
        <div class="mt-5 grid w-full md:grid-cols-2 grid-cols-1 gap-4">
        {#each collections as collection, i}
            <div class="w-full">
                <a sveltekit:prefetch href="/store/collections/{collection.node.handle}">
                    <div style="background-image:url('{collection.node.image.transformedSrc}')" class="bg-no-repeat bg-cover bg-top bg-left h-[400px]">
                        <div class="bg-orange w-fit">
                            <p class="font-extrabold py-2 px-6 text-5xl tracking-wide text-tan leading-[1]">{collection.node.title}</p>
                        </div>
                    </div>
                </a>
            </div>
        {/each}
        </div>
    </div>
    <div>
        <a sveltekit:prefetch href="/about">
            <div class="mt-5 lg:bg-mywork-desktop-img bg-mywork-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
                <div class="bg-blue w-fit">
                    <p class="font-extrabold   py-2 px-6 text-5xl tracking-wide text-tan">about me.</p>
                </div>
            </div>
        </a>

    </div>
</section>
