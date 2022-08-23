<script lang="ts">
    import type { Product, TagType } from '$lib/types';
    import { cubicInOut } from 'svelte/easing';
    import { blur } from 'svelte/transition';
    import Tag from '../Tag.svelte';

    export let product:Product;
    export let typesList:Array<TagType>
    export let i:number;

    const productType = typesList.filter((type: { name: any; }) => {
        return type.name === product.productType
   }) 

</script>

{#if typeof product != undefined}
    <a sveltekit:prefetch in:blur="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="drop-shadow-sm relative overflow-x-hidden bg-slate-400 aspect-w-1 aspect-h-1 hover:scale-[1.05] transition ease-in-out " href="/store/{product.handle}">
        <div class="relative z-10">
            <Tag extras="absolute right-0 h-[25px] w-[25px] " text="lg" color={productType[0].color}/>
        </div>
        <div class="h-full">
            <img class="h-full w-full object-cover object-center" loading='lazy' srcset="{product.imageSrc}" alt="{product.handle}">
        </div>
        <div>
            <div class="flex-col absolute bottom-0 w-1/2 bg-tan justify-between rounded-tr-sm">
                <p class="text-brown text-xs md:text-lg lg:text-2xl font-semibold">{product.title}</p>
                <p class="text-brown text-xs md:text-lg lg:text-2xl font-extrabold tracking-wider">${product.price}0</p>
            </div>
        </div>
    </a>
{/if}