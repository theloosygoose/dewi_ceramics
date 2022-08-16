<script lang="ts">
import { cartItemsStore, getCartItems } from "$lib/stores/cartStores";
import { alertHandler } from "$lib/stores/alertToggle";
import { fade } from "svelte/transition";


export let singleProduct:any;
let cartItems: any;
cartItemsStore.subscribe((items) => cartItems = items);
let cartLoading = false;

async function addToCart() {
    cartLoading = true;
    let cartId;
    const variantId = singleProduct.variantId;
    if ('lines' in cartItems) {
        if (cartItems.lines.edges.some((item: { node: { merchandise: { id: any; }; }; }) => { return item.node.merchandise.id === variantId})) {
            alertHandler();
            getCartItems();
            cartLoading = false;
        } else {
            if (typeof window != 'undefined'){
                cartId = JSON.parse(localStorage.getItem('cartId') || '');
            }

            
            await fetch('/api/cart.json', {
                method: 'PATCH',
                body: JSON.stringify({cartId: cartId, variantId: variantId})
            })

            getCartItems();
            setTimeout(() => {cartLoading = false}, 1000)
        }
    }     
}
</script>

<button
    class="bg-brown text-white p-3 w-1/3 font-extrabold text-center"
    on:click={addToCart}
    >
    <div class="flex justify-center items-center">
    <span>Add To Cart</span>
    {#if cartLoading}
        <div class="ml-2 loader mb-1"></div>
    {/if}
    </div>

</button>

<style>
.loader {
  width: 20px;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(rgb(255, 255, 255) 0 0);
  background: 
    var(--c),
    var(--c),
    var(--c);
  background-size: 20% 50%;
  animation: load 1s infinite linear;
}
@keyframes load {
  0%  {background-position: 0% 100%,50% 100%,100% 100%} 
  20% {background-position: 0% 50% ,50% 100%,100% 100%} 
  40% {background-position: 0% 0%  ,50% 50% ,100% 100%} 
  60% {background-position: 0% 100%,50% 0%  ,100% 50% } 
  80% {background-position: 0% 100%,50% 100%,100% 0%  } 
  100%{background-position: 0% 100%,50% 100%,100% 100%} 
}
</style>
