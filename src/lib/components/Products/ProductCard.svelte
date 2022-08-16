<script lang="ts">
    import type { Product } from '$lib/types';
    import { cubicInOut } from 'svelte/easing';
    import { blur } from 'svelte/transition';

    export let product:Product;
    export let i:number;


</script>
{#if typeof product != undefined}
    <a sveltekit:prefetch class="mix-w-[50px] min-h-[50px] hover:translate-y-1" href="/store/{product.handle}">
        <div in:blur="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
            <div class="h-64 w-full drop-shadow-md">
                <img class="h-full w-full object-cover object-center" loading='lazy' srcset="{product.imageSrc}" alt="{product.handle}">
            </div>
            <div class="p-2 flex-col justify-between ml-1 mr-3">
                <p class="text-black text-lg font-semibold">{product.title}</p>
                <p class="text-black text-lg font-medium">${product.price}</p>
            </div>
        </div>
    </a>
{/if}