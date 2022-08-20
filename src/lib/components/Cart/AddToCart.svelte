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
    class="relative h-fit self-start justify-self-center lg:justify-self-start bg-brown text-white p-3 w-[90%] lg:w-[70%] font-extrabold"
    on:click={addToCart}
    >
    <span class="text-center">Add To Cart</span>
    <svg class="absolute right-7 bottom-3"version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        {#if cartLoading}
            <rect x="0" y="0" width="5" height="16" fill="#fff">
                <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0" dur="0.9s" repeatCount="indefinite" />
            </rect>
            <rect x="6" y="0" width="5" height="16" fill="#fff">
                <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s" dur="0.9s" repeatCount="indefinite" />
            </rect>
            <rect x="12" y="0" width="5" height="16" fill="#fff">
                <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s" dur="0.9s" repeatCount="indefinite" />
            </rect>
        {/if}
    </svg>

</button>