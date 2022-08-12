<script lang="ts">
    let scroll:number;
</script>


<svelte:window bind:scrollY={scroll}/>
<div class="top-0 bg-hero-img bg-no-repeat bg-cover h-screen w-screen md:h-[50vh] md:w-1/2">
</div>

<h1 class="fixed z-10 pl-5 text-6xl sm:text-7xl md:text-9xl bottom-20  font-extrabold tracking-normal leading-[0.78] text-white md:text-brown"
style:transform={`translate3d(0, -${scroll*1.2}px, 0)`}
>
        DEWI <br> CERAMICS 
</h1>

<a href="/store">
    <div class="mt-5 bg-store-img bg-no-repeat bg-cover h-64">
        <div class="bg-red w-fit">
            <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">store.</p>
        </div>
    </div>
</a>
<a href="/about">
    <div class="mt-5 bg-store-img bg-no-repeat bg-cover h-64">
        <div class="bg-blue w-fit">
            <p class="font-extrabold italic py-2 px-6 text-5xl tracking-wide text-white">my work</p>
        </div>
    </div>
</a>
