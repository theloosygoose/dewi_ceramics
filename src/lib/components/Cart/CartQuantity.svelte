<script lang="ts">
import { cartQuantity } from "$lib/stores/cartStores";
import { slide } from "svelte/transition"

let quantity:number;

cartQuantity.subscribe(q => quantity = q);


const cartColor = function () {
    if (quantity > 0) {
        return "text-green"
        
    } else {
        return "text-brown"
    }
    
}
</script>

{#key quantity}
<p transition:slide class="text-sm -mt-2 {cartColor()} ">[ {quantity} ]</p>
{/key}