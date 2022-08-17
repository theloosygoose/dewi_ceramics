<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let scroll:number;

    let ready = false;
    onMount(() => {
        ready = true;
    })
</script>


<svelte:window bind:scrollY={scroll}/>
<div class="lg:bg-hero-desktop-img bg-hero-mobile-img bg-center bg-no-repeat bg-cover w-full h-[400px] md:h-[600px] lg:h-[80vh] flex items-end justify-left overflow-hidden">
    {#if ready}
        <h1 class="relative z-0 pl-5 pb-5 text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-normal leading-[0.78] text-white"
            style:transform={`translate3d(0, -${scroll*1.2}px, 0)`}
            in:fly="{{y:50, delay:500, duration:700}}">
                    DEWI <br> CERAMICS 
        </h1>        
    {/if}
</div>

<section class="flex-col">
    <a href="/store">
        <div class="mt-5 lg:bg-store-desktop-img bg-store-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
            <div class="bg-red w-fit">
                <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">store.</p>
            </div>
        </div>
    </a>
    <div class="mx-5">
        <h1 class="text-brown font-extrabold text-5xl lg:text-7xl text-center tracking-normal underline">COLLECTIONS</h1>
        <div class="mt-5 grid w-full md:grid-cols-2 grid-cols-1 gap-4">
            <a href="/store/collections">
                <div class="lg:bg-maine-collection-desktop-img bg-maine-collection-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
                    <div class="bg-green w-fit">
                        <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white leading-[1] ">made with <br> maine<p>
                    </div>
                </div>
            </a>
            <a href="/store/collections">
                <div class="lg:bg-choices-collection-desktop-img bg-choices-collection-mobile-img bg-no-repeat bg-cover bg-left min-h-[500px]">
                    <div class="bg-orange w-fit">
                        <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">rabbit's picks</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div>
        <a href="/about">
            <div class="mt-5 lg:bg-mywork-desktop-img bg-mywork-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
                <div class="bg-blue w-fit">
                    <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">about me.</p>
                </div>
            </div>
        </a>

    </div>
</section>
