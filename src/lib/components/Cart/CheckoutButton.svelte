<script lang="ts">
import { fly } from 'svelte/transition';

let checkoutUrl;
async function goCheckout() {
   if(typeof window != 'undefined'){
        checkoutUrl = await JSON.parse(localStorage.getItem('checkoutUrl') || '');
        window.open(checkoutUrl, '_blank');
   } 

}
</script>

<button 
    on:click={() => goCheckout()}
    in:fly="{{x:-5, delay:500}}"
    class="self-end bg-brown text-white font-bold text-2xl w-full h-fit">
Checkout
</button>