<script lang="ts">

import { slide, fade } from "svelte/transition";
import { backOut,expoOut } from 'svelte/easing';
import { isMenuOpenStore, menuHandler } from "$lib/stores/headerStores";

let isMenuOpen: boolean;
isMenuOpenStore.subscribe(isOpen => isMenuOpen = isOpen)

</script>
{#if isMenuOpen}
    <nav in:slide="{{duration: 400, easing: backOut}}"  out:slide="{{duration:600, easing: expoOut, delay: 500}}" 
        class="z-50 flex justify-center align-center w-full h-fit fixed overflow-hidden bg-tan drop-shadow-md">
        <ul in:fade="{{duration:300, delay:400}}" out:fade="{{duration:200}}"
        class="text-brown">
            <li class="pt-5 pb-5 text-center hover:scale-[1.05] transition ease-in-out ">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/">Home</a>
            </li>
            <li class="pb-5 text-center hover:scale-[1.05] transition ease-in-out ">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/store">All Pottery</a>
            </li>
            <li class="pb-5 text-center hover:scale-[1.05] transition ease-in-out ">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/collections">Collections</a>
            </li>
            <li class="pb-5 text-center hover:scale-[1.05] transition ease-in-out ">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="/about">About Me</a>
            </li>
            <li class="pb-10 text-center hover:scale-[1.05] transition ease-in-out ">
                <a sveltekit:prefetch class="text-brown font-extrabold tracking-normal text-2xl" on:click="{menuHandler}" href="https://www.instagram.com/dewi.ceramics/" target="_blank">Instagram</a>
            </li>
        </ul>
    </nav> 
{/if}