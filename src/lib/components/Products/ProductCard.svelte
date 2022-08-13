<script lang="ts">
    import type { Product } from '$lib/types';
    import { cubicInOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';

    export let product:Product;
    export let i:number;


</script>

<a sveltekit:prefetch href="/store/{product.handle}">
    <div in:scale="{{delay:1+(i*200),duration:600, easing:cubicInOut}}" class="overflow-x-hidden">
        <p>{product.id}</p>
        <p>{product.title}</p>
        <img loading='lazy' class="h-20" src="{product.imageSrc}" alt="">
        <p>${product.price}</p>
        <p>{product.productType}</p>
    </div>
</a>