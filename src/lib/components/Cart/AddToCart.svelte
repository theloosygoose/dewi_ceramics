<script lang="ts">
import { getCartItems } from "$lib/stores/cartStores";


export let singleProduct:any;

let cartLoading = false;
async function addToCart() {
    cartLoading = true;
    let variantId;
    let cartId;

    if (typeof window != 'undefined'){
        cartId = JSON.parse(localStorage.getItem('cartId') || '');
    }

    variantId = singleProduct.variantId;
    
    await fetch('/api/cart.json', {
        method: 'PATCH',
        body: JSON.stringify({cartId: cartId, variantId: variantId})
    })

    getCartItems();
    cartLoading = false;
}
</script>

<button
    class="bg-brown text-white p-3 w-1/3 font-extrabold text-center"
    on:click={addToCart}
    >
    <div class="flex justify-center items-center">
    <span>Add To Cart</span>
    {#if cartLoading}
    <div class="w-4 h-4 rounded-full animate-spin
    border-2 border-solid border-green-500 border-t-transparent"></div>

    {/if}
    </div>

</button>
