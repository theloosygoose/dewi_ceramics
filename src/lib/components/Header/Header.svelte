<script lang="ts">
import Cart from "../Cart/Cart.svelte";
import Nav from "./Nav.svelte"; 
import { fly } from "svelte/transition"
import { cubicInOut } from "svelte/easing";

let isMenuOpen = false;
let menuTag = 'Menu'
const menuHandler = () => {
     isMenuOpen = !isMenuOpen
     if (menuTag === 'Menu'){
        menuTag = 'Close'
     } else {
        menuTag ='Menu'
     }
}
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
    <Cart/>
</header>
    <Nav {isMenuOpen} on:click={menuHandler} />

<style>

</style>