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

<header class="sticky top-0 z-10 flex justify-center items-center p-5 h-[4.5rem] bg-tan">
    {#key isMenuOpen}
        <button class="text-brown absolute left-3 top-4.05 pr-2 text-xl font-extrabold tracking-normal" 
        on:click={menuHandler}
        in:fly={{y:-40, duration:500, opacity:0, easing: cubicInOut}}
        out:fly={{y:40, duration:500, opacity:0, easing: cubicInOut}}
        >
        {menuTag}
        </button>
    {/key}
    <h1 transition:fly class="z-0 text-2xl text-brown font-black tracking-normal"><a href="/">DEWI CERAMICS</a></h1>


    {#key isCartOpen}
        <button class="z-50 tracking-normal font-extrabold text-brown text-lg absolute top-4 right-3 overflow-visible"
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