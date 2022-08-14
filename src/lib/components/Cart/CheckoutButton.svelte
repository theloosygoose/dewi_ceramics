<script lang="ts">


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
    class="bg-brown text-white font-bold text-lg w-1/2 p-2">
Checkout
</button>