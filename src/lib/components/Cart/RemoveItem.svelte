<script lang="ts">
import { getCartItems } from "$lib/stores/cartStores";



export let merchandiseId:string;
export let lineId:string;

let removeLoading = false;
async function removeItem(merchandiseId: string, lineId: string) {
    removeLoading = true
    let cartId;

    if (typeof window != 'undefined'){
        cartId = await JSON.parse(localStorage.getItem('cartId') || '');
    }

    await fetch('/api/cart.json', {
        method: 'PUT',
        body: JSON.stringify({cartId: cartId, lineId: lineId, variantId: merchandiseId, quantity: 0})
    })

    await getCartItems();
    removeLoading = false;
}
</script>

<button class="justify-self-end self-end text-red font-semibold py-1 text-[0.70rem] flex justify-center items-center underline"
    on:click={() => {removeItem(merchandiseId, lineId)}}>
    {#if removeLoading === false}
      Remove
    {:else} 
    <svg  class="fill-red" width="46" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>
    {/if}
</button>
