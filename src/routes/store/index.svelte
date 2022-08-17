<script>
    import { fly } from "svelte/transition";
    import { quartOut } from "svelte/easing";

</script>

<div class="overflow-x-hidden">
    <h1 class="text-5xl md:text-6xl lg:text-7xl text-brown font-extrabold tracking-normal text-center underline">STORE</h1>
    <div class="flex-col">
        <div class="bg-red mt-5">
            <a href="/store/all" class=" md:mx-[15%] grid grid-cols-2 bg-red">
                <div in:fly="{{x:-1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="h-full grid grid-rows-2 justify-end items-start my-5 mr-[10%] md:mr-[20%] lg:mt-[20%]">
                    <h1 class="text-tan text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-[1]">ALL <br> PRODUCTS</h1>
                    <p class="text-tan text-sm sm:text-lg  font-medium leading-[1]">Browse<br>All Products</p>
                </div>
                <div in:fly="{{x:1000, duration:1000, opacity:1, delay:500, easing:quartOut}}" class="w-full  justify-self-end ">
                    <img class="h-full w-full max-h-[500px] object-cover object-center" src="/images/pottery.png" alt="all products">
                </div>
            </a>
        </div>
        <h1 class="text-center text-4xl text-brown font-bold tracking-wide underline my-4">COLLECTIONS</h1>
        <div class="">
        </div>
    </div>
</div>