<script lang="ts">
import Cart from "../Cart/Cart.svelte";
import Nav from "./Nav.svelte"; 
import { fly } from "svelte/transition"
import { cubicInOut } from "svelte/easing";
import { menuTagStore, isMenuOpenStore, menuHandler, isCartOpenStore, cartTagStore, cartHandler } from "$lib/stores/headerStores";
import CartQuantity from "../Cart/CartQuantity.svelte";


let menuTag:string;
let isMenuOpen:boolean;

menuTagStore.subscribe(tag => menuTag = tag)
isMenuOpenStore.subscribe(isOpen => isMenuOpen = isOpen)


let isCartOpen:boolean;
let cartTag:string;

cartTagStore.subscribe(tag => cartTag = tag)
isCartOpenStore.subscribe(isOpen => isCartOpen = isOpen)




</script>

<header class="z-10 flex justify-end align-end p-5 h-[4.5rem] bg-tan">
    {#key isMenuOpen}
        <button class="text-brown absolute left-3 top-3 pr-2 text-3xl font-extrabold tracking-normal" 
        on:click={menuHandler}
        in:fly={{y:-40, duration:500, opacity:0, easing: cubicInOut}}
        out:fly={{y:40, duration:500, opacity:0, easing: cubicInOut}}
        >
        {menuTag}
        </button>
    {/key}

    {#key isCartOpen}
        <button class="z-50 tracking-normal font-extrabold text-brown text-xl absolute top-4 right-7 overflow-visible"
        on:click={cartHandler}
        in:fly={{y:-40, duration:500, opacity:0, easing: cubicInOut}}
        out:fly={{y:40, duration:500, opacity:0, easing: cubicInOut}}>
            {cartTag}
            <CartQuantity/>
        </button>
    {/key}
</header>
    <Nav/>
    <Cart/>

<style>

</style>