<script lang="ts">
import { fly } from 'svelte/transition';

let checkoutUrl;
async function goCheckout() {
   if(typeof window != 'undefined'){
        checkoutUrl = await JSON.parse(localStorage.getItem('checkoutUrl') || '');
        window.open(checkoutUrl);
   } 

}
</script>

<button 
    on:click={() => goCheckout()}
    class="self-end bg-brown text-white font-bold text-2xl w-full h-fit absolute bottom-2 py-1">
Checkout
</button>