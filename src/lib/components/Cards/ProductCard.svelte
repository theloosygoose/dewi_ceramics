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
    <a sveltekit:prefetch class="relative bg-product min-w-[30px] min-h-[30px] max-w-[330px] hover:transition-colors" href="/store/{product.handle}">
        <div in:blur="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
            <Tag extras="absolute top-1 right-0 w-[90px]" text="sm" height="fit" width="fit" color={productType[0].color} name={productType[0].name}/>
            <div class="h-[200px] overflow-hidden justify-center">
                <img class="h-full w-full object-cover object-center" loading='lazy' srcset="{product.imageSrc}" alt="{product.handle}">
            </div>
            <div class="p-1 py-3 flex-col justify-between ml-1">
                <p class="text-brown text-m font-semibold">{product.title}</p>
                <p class="text-brown text-2xl font-extrabold tracking-wider">${product.price}0</p>
            </div>
        </div>
    </a>
{/if}