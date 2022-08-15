<script lang="ts">
    import type { Product } from '$lib/types';
    import { cubicInOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';

    export let product:Product;
    export let i:number;


</script>
{#if typeof product != undefined}
    <a sveltekit:prefetch href="/store/{product.handle}">
        <div in:scale="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
            <img loading='lazy' height="50" class="rounded" src="{product.imageSrc}" alt="">
            <div class="flex justify-start mx-3">
                <p class="text-brown tracking-normal font-semibold text-lg">{product.title}</p>
                <p class="text-brown tracking-normal font-semibold text-lg">${product.price}</p>
            </div>
        </div>
    </a>
{:else}
    ...Loading Products
{/if}