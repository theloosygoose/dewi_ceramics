<script lang="ts">
export let color:string;
export let name:string;
</script>

<button 
    class="p-1 ml-2 mb-2 text-white font-bold italic"
    style="background-color:{color};"
    on:click>{name}</button>