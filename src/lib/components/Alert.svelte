<script lang="ts">
import { showAlert } from "$lib/stores/alertToggle";
import { fly } from 'svelte/transition';
let show:boolean;

showAlert.subscribe((d)=> show = d);

</script>

{#if show}
<div  in:fly="{{y:-5, duration:400}}" out:fly="{{y:-5, duration:400}}" class="bg-red w-full absolute z-50 text-white font-extrabold text-lg mx-auto text-center">
    CANT HAVE TWO OF THE SAME ITEM
</div>
{/if}