<script lang="ts">
import { isCartOpenStore } from "$lib/stores/headerStores";
import { cartItemsStore } from "$lib/stores/cartStores";

import { cubicInOut } from "svelte/easing";
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
    in:slide="{{duration:500, easing: cubicInOut}}" out:slide="{{duration:500, easing:cubicInOut}}"
    class="bg-tan h-1/2 w-full md:w-1/2 lg:w-1/3 absolute right-0 overflow-hidden ">
    {#key cartItems}
        {#each cartItems as item}
            <div class="flex justify-between">
                <h1 class="text-lg">{item.node.merchandise.product.title}</h1>
                <h2>{item.node.estimatedCost.subtotalAmount.amount}</h2>
                <RemoveItem merchandiseId = {item.node.merchandiseId} lineId = {item.node.id}/> 
            </div>
        {/each}
        <p>Total Price = {cartPrice}</p>
    {/key}
        <CheckoutButton/>
    </div>
{/if}

