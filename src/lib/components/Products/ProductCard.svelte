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
    <a sveltekit:prefetch class="relative bg-product mix-w-[50px] min-h-[50px] hover:transition-colors" href="/store/{product.handle}">
        <div in:blur="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
            <Tag extras="absolute top-1 right-0 w-[90px]" text="sm" height="fit" width="fit" color={productType[0].color} name={productType[0].name}/>
            <div class="h-[200px] overflow-hidden justify-center">
                <img class="h-full w-full object-cover object-center" loading='lazy' srcset="{product.imageSrc}" alt="{product.handle}">
            </div>
            <div class="p-2 flex-col justify-between ml-1 mr-3">
                <p class="text-black text-m font-semibold">{product.title}</p>
                <p class="text-black text-m font-medium">${product.price}</p>
            </div>
        </div>
    </a>
{/if}