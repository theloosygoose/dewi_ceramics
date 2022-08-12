<script lang="ts">
import { slide, fade } from "svelte/transition";
import { cubicInOut, elasticInOut} from 'svelte/easing';
export let isMenuOpen:boolean;
</script>
{#if isMenuOpen}
    <nav in:slide="{{duration: 500, easing: cubicInOut}}"  out:slide="{{duration:500, easing:cubicInOut, delay: 500}}" 
        class="z-50 flex justify-center align-center w-full h-fit absolute overflow-hidden bg-tan">
        <ul in:fade="{{duration:300, delay:700}}" out:fade="{{duration:300}}"
        class="text-brown">
            <li class="pt-5 pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="/">Home</a>
            </li>
            <li class="pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="/store">Shop All</a>
            </li>
            <li class="pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="#">Mugs</a>
            </li>
            <li class="pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="#">Vases</a>
            </li>
            <li class="pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="#">Vases</a>
            </li>
            <li class="pb-5 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="#">My Work</a>
            </li>
            <li class="pb-10 text-center">
                <a class="text-brown font-extrabold tracking-normal text-2xl" on:click href="#">Instagram</a>
            </li>
        </ul>
    </nav> 
{/if}