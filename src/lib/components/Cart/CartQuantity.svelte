<script lang="ts">
import { cartQuantity } from "$lib/stores/cartStores";
import { slide } from "svelte/transition"

let quantity:number;

cartQuantity.subscribe(q => quantity = q);
</script>

{#key quantity}
<p transition:slide class="text-sm -mt-2">[ {quantity} ]</p>
{/key}