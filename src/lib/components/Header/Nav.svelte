<script lang="ts">

import { slide, fade } from "svelte/transition";
import { backOut,expoOut } from 'svelte/easing';
import { isMenuOpenStore, menuHandler } from "$lib/stores/headerStores";

let isMenuOpen: boolean;
isMenuOpenStore.subscribe(isOpen => isMenuOpen = isOpen)

</script>
{#if isMenuOpen}
    <nav in:slide="{{duration: 600, easing: backOut}}"  out:slide="{{duration:1000, easing: expoOut, delay: 500}}" 
        class="z-50 flex justify-center align-center w-full h-fit fixed overflow-hidden bg-tan drop-shadow-md">
        <ul in:fade="{{duration:300, delay:700}}" out:fade="{{duration:300}}"
        class="text-brown">
            <li class="pt-5 pb-5 text-center">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/">Home</a>
            </li>
            <li class="pb-5 text-center">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/store">Store</a>
            </li>
            <li class="pb-5 text-center">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/store/all">All Pottery</a>
            </li>
            <li class="pb-5 text-center">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="#">My Work</a>
            </li>
            <li class="pb-10 text-center">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="https://www.instagram.com/dewi.ceramics/" target="_blank">Instagram</a>
            </li>
        </ul>
    </nav> 
{/if}