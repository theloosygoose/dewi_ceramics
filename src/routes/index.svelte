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
    import viewport from '$lib/actions/useViewportAction';

    import { fly,fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let collections:any 
    
    let articleView = false;
    let scroll:number;
    let ready = false;
    onMount(async () => {
        ready = true;

    })
  

 </script>

 <svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:url" content="www.dewiceramics.netlify.app">
    <meta property="og:title" content="Dewi Ceramics">
    <meta property="og:description" content="Ceramics and pottery handcrafted by Dewi Henry in Philadelphia, PA. Shop for mugs, pots, teacups, and more.">
    <meta property="og:image" content="/icons/logolarge.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="www.dewiceramics.netlify.app">
    <meta property="twitter:title" content="Dewi Ceramics">
    <meta property="twitter:description" content="Ceramics and pottery handcrafted by Dewi Henry in Philadelphia, PA. Shop for mugs, pots, teacups, and more.">
    <meta property="twitter:image" content="/icons/logolarge.png">
 </svelte:head>


<svelte:window bind:scrollY={scroll}/>
<div class="z-[1] relative lg:bg-hero-desktop-img bg-hero-mobile-img bg-[center] bg-no-repeat bg-cover w-full h-[80vh] flex items-end justify-left overflow-hidden drop-shadow-md">
    {#if ready}
        <h1 class="relative z-0 ml-[5%] mb-[10%] text-6xl xs:text-7xl md:text-9xl font-extrabold tracking-normal leading-[0.78] text-white drop-shadow-lg"
            style:transform={`translate3d(0, -${scroll*1.2}px, 0)`}
            in:fly="{{y:50, delay:500, duration:700}}">
                    DEWI <br> CERAMICS 
        </h1>        
    {/if}
</div>

<div href="#store_page" class="flex gap-2 justify-center mt-8 relative">
    <img class="animate-bounce pt-2" src="/icons/arrow_down.svg" alt="See More Below">
    <p class="text-xl text-brown font-medium tracking-wide">Scroll to Learn More</p>
</div>

<div class="relative overflow-hidden">
    <article class="my-24 relative z-20 overflow-x-hidden" use:viewport on:enterViewport={() => {return articleView = true}} >
        {#if articleView }
        <h2 in:fly="{{x:-100, delay:700, duration:700}}" class="mx-[5%] z-30 relative text-5xl xs:text-6xl md:text-7xl lg:text-8xl text-brown font-bold tracking-normal leading-[1]">Buy Independent, Not Big Business</h2>
        <p  in:fly="{{x:100,delay:1200,duration:700}}" class="mx-[5%] z-30 relative text-xl text-brown font-medium tracking-wide mt-2">I'm an independent ceramist making fun mugs, bowls, teacups, teapots, vases, and more!</p>
        {:else}
            <div class="h-[40vh]"></div>
        {/if}
    </article>
    <!-- {#if articleView}
        <div class="drop-shadow-2xl z-[0] absolute w-[200px] h-[200px] -right-10 -top-[20px] md:right-10 md:-bottom-40" >
            <img use:scrollImage use:fadeOnTigger class="opacity-0 w-full h-full object-center object-cover rounded-full"  height="50" src="/images/dewi_photo_1.webp" alt="Dewi Hiking">
        </div>
    {/if} -->
</div>
    
<section class="flex-col relative z-10">
    <a sveltekit:prefetch href="/store">
        <div class="mt-5 lg:bg-store-desktop-img bg-store-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
            <div class="bg-red w-fit">
                <p class="font-extrabold  py-2 px-6 text-5xl tracking-wide text-tan">store.</p>
            </div>
        </div>
    </a>
    <div class="mx-5 mt-5">
        <h2 class="mx-auto w-full bg-product text-brown font-extrabold  text-4xl md:text-5xl lg:text-7xl text-center tracking-normal leading-[1]">FEATURED <br> COLLECTIONS</h2>
        <div class="mt-5 grid w-full md:grid-cols-2 grid-cols-1 gap-4">
        {#each collections as collection, i}
            <div class="w-full">
                <a sveltekit:prefetch href="/store/collections/{collection.node.handle}">
                    <div style="background-image:url('{collection.node.image.transformedSrc}')" class="bg-no-repeat bg-cover bg-top h-[400px] ">
                        <div class="bg-orange w-fit">
                            <h3 class="font-extrabold py-2 px-6 text-4xl tracking-wide text-tan leading-[1]">{collection.node.title}</h3>
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
