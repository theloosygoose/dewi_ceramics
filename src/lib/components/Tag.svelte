<script lang="ts">
export let color:string;
export let name:string;

export let height:string;
export let width:string
export let text:string;
export let extras = "";
</script>

<button 
    class="h-{height} w-{width} p-1 pr-[0.35rem] text-center ml-2 mb-2 text-white font-bold italic text-{text} hover:opacity-80 {extras}"
    style="background-color:{color};"
    on:click>{name}</button>