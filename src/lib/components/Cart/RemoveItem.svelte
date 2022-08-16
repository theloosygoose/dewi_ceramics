<script lang="ts">
import { getCartItems } from "$lib/stores/cartStores";



export let merchandiseId:string;
export let lineId:string;

let removeLoading = false;
async function removeItem(merchandiseId, lineId) {
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

<button class="rounded bg-red text-white font-semibold px-3 py-2 text-sm flex justify-center items-center"
    on:click={() => {removeItem(merchandiseId, lineId)}}>
    {#if removeLoading === false}
        X
    {:else} 
        <div class="w-4 h-4 rounded-full animate-spin border-2 border-solid border-green-500 border-t-transparent"></div>
    {/if}
</button>

