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
let cartPrice:any;

cartItemsStore.subscribe((items) => {
    if ('lines' in items) {
       cartItems = items.lines.edges;
       cartPrice = items.estimatedCost.subtotalAmount.amount;
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
                    <img class="ml-[25%] h-[200px]" src="/icons/sad.svg" alt="c'mon do something meme">
                    <a on:click="{cartHandler}" href="/store" class="text-brown underline" > Click Me to Look at Some Pots!</a>
                </div>
            {:else}
                <div class="static">
                        <div class="flex-col border-t-brown border mx-5">
                            {#each cartItems as item, i}
                                <div class="flex border-b-brown border justify-between" >
                                    <div class="flex items-end my-4">
                                        <img class="" width='70px' src="{item.node.merchandise.product.images.edges[0].node.transformedSrc}" alt="">
                                        <h1 class="pl-3 text-lg text-brown font-semibold leading-[1.2]">{item.node.merchandise.product.title}</h1>
                                    </div>
                                    <div class="grid grid-cols-1 grid-rows-2 justify-between py-2">
                                        <h2 class="text-brown font-bold">${item.node.estimatedCost.subtotalAmount.amount}0</h2>
                                        <RemoveItem merchandiseId = {item.node.merchandiseId} lineId = {item.node.id}/> 
                                    </div>
                                </div>
                            {/each}
                            <div class="h-26 mb-36">
                            </div>
                        </div>
                        <div class="absolute flex justify-between bottom-20 w-[90%]">
                            <p class="text-brown font-bold medium text-lg">Total Price:</p>
                            <p class="text-brown text-lg font-bold">${cartPrice}0</p>
                        </div>
                        <p class="absolute bottom-14 text-brown font-medium text-md">Shipping Calculated at Checkout</p>
                    </div>
            {/if}
            {/key}
            {#if cartItems.length >= 1}
            <CheckoutButton/>
            {/if}
    </div>
{/if}

