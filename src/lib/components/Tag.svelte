<script lang="ts">
export let color:string;
export let name:string;
</script>

<button 
    class="h-fit w-fit p-1 pr-[0.35rem] text-center ml-2 mb-2 text-white font-bold italic text-lg hover:opacity-80"
    style="background-color:{color};"
    on:click>{name}</button>