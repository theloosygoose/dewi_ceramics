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
        <div class="loader mb-1"></div>
    {/if}
</button>

<style>
.loader {
  width: 10px;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(rgb(255, 255, 255) 0 0);
  background: 
    var(--c),
    var(--c),
    var(--c);
  background-size: 25% 50%;
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
