<script lang="ts">
import { isCartOpenStore } from "$lib/stores/headerStores";
import { cubicInOut } from "svelte/easing";
import { slide } from "svelte/transition"

let isCartOpen:boolean;
isCartOpenStore.subscribe((isOpen) => isCartOpen = isOpen)

let isShopifyCart = false;

</script>

{#if isCartOpen}
    <div 
    in:slide="{{duration:500, easing: cubicInOut}}" out:slide="{{duration:500, easing:cubicInOut}}"
    class="bg-tan h-1/2 w-full md:w-1/2 lg:w-1/3 absolute right-0 overflow-hidden "></div>
{/if}

