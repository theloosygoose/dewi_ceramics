<script lang="ts">
import { isCartOpenStore } from "$lib/stores/headerStores";
import { cartItemsStore } from "$lib/stores/cartStores";

import { cubicInOut, elasticOut, expoIn, expoOut } from "svelte/easing";
import { slide, fly } from "svelte/transition"
import RemoveItem from "$lib/components/Cart/RemoveItem.svelte";
import CheckoutButton from "./CheckoutButton.svelte";

let isCartOpen:boolean;
isCartOpenStore.subscribe((isOpen) => isCartOpen = isOpen)

let cartId:string;
let response;
let cartItems:[];
let cartPrice:string

cartItemsStore.subscribe((items) => {
    if ('lines' in items) {
       cartItems = items.lines.edges;
       console.log(cartItems);
       cartPrice = items.estimatedCost.totalAmount.amount;
    } else {
        cartItems = [];
    }
});
</script>

{#if isCartOpen}
    <div 
    in:slide="{{duration:1000, easing: elasticOut}}" out:slide="{{duration:600, easing:expoOut}}"
    class="z-10 bg-tan h-fit w-full md:w-1/2 lg:w-1/3 fixed right-0 overflow-y-scroll drop-shadow-xl
            grid grid-cols-1 grid-row">
    {#key cartItems}
        {#if cartItems.length < 1}
            PUT SOMETHING IN YOUR CART BUY SOMETHING
        {:else}
            <div class="flex-col">
                {#each cartItems as item, i}
                    <div class="flex justify-between items-end" >
                        <img width='50px' src="{item.node.merchandise.product.images.edges[0].node.originalSrc}" alt="">
                        <h1 class="text-lg text-brown font-semibold">{item.node.merchandise.product.title}</h1>
                        <h2>{item.node.estimatedCost.subtotalAmount.amount}</h2>
                        <RemoveItem merchandiseId = {item.node.merchandiseId} lineId = {item.node.id}/> 
                    </div>
                {/each}
            </div>
            <p in:fly="{{x: -5, delay:500}}"class="">Total Price = {cartPrice}</p>
        {/if}
    {/key}
    {#if cartItems.length >= 1}
        
        <CheckoutButton/>
    {/if}
    </div>
{/if}

