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
<div class="lg:bg-hero-desktop-img bg-hero-mobile-img bg-center bg-no-repeat bg-cover w-screen h-[400px] md:h-[600px] lg:h-[1000px] flex items-end justify-left overflow-hidden">
    {#if ready}
        <h1 class="relative z-10 pl-5 pb-5 text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-normal leading-[0.78] text-white"
            style:transform={`translate3d(0, -${scroll*1.2}px, 0)`}
            in:fly="{{y:50, delay:500, duration:700}}">
                    DEWI <br> CERAMICS 
        </h1>        
    {/if}
</div>
<a href="/store">
    <div class="mt-5 lg:bg-store-desktop-img bg-store-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
        <div class="bg-red w-fit">
            <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">store.</p>
        </div>
    </div>
</a>
<a href="/about">
    <div class="mt-5 lg:bg-mywork-desktop-img bg-mywork-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
        <div class="bg-blue w-fit">
            <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">my work</p>
        </div>
    </div>
</a>
