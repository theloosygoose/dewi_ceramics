<script lang="ts">
import { isCartOpenStore, cartHandler } from "$lib/stores/headerStores";
import { cartItemsStore } from "$lib/stores/cartStores";

import { expoOut } from "svelte/easing";
import { slide } from "svelte/transition"
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
       cartPrice = items.estimatedCost.totalAmount.amount;
    } else {
        cartItems = [];
    }
});
</script>

{#if isCartOpen}
    <div 
    in:slide="{{duration:1000, easing:expoOut}}" out:slide="{{duration:600, easing:expoOut}}"
    class="z-50 bg-tan w-full md:w-[40vw] xl:w[20vw] fixed right-0 drop-shadow-2xl p-2 grid grid-col-1">
            {#key cartItems}
            {#if cartItems.length < 1}
                <div class="my-4 justify-self-center self-center">
                    <h1 class="text-xl font-bold text-brown leading-normal">HEY! Your Cart is Empty</h1>
                    <img class="ml-[25%] h-[200px]" src="/sad.svg" alt="c'mon do something meme">
                    <a on:click="{cartHandler}" href="/store" class="text-brown underline" > Click Me to Look at Some Pots!</a>
                </div>
            {:else}
                <div class="static">
                        <div class="flex-col">
                            {#each cartItems as item, i}
                                <div class="grid grid-cols-4 items-end py-6 border-b-brown border" >
                                    <img class="rounded" width='50px' src="{item.node.merchandise.product.images.edges[0].node.originalSrc}" alt="">
                                    <h1 class="text-lg text-brown font-semibold leading-[1.2]">{item.node.merchandise.product.title}</h1>
                                    <h2 class="text-right text-brown font-medium">${item.node.estimatedCost.subtotalAmount.amount}0</h2>
                                    <RemoveItem merchandiseId = {item.node.merchandiseId} lineId = {item.node.id}/> 
                                </div>
                            {/each}
                            <div class="h-26 mb-20">
                            </div>
                        </div>
                        <p class="absolute bottom-14 text-brown font-medium text-lg">Total Price = <b>${cartPrice}0</b></p>
                    </div>
            {/if}
            {/key}
            {#if cartItems.length >= 1}
            <CheckoutButton/>
            {/if}
    </div>
{/if}

