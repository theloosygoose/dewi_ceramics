<script lang="ts">
export let color:string;
export let name = "  ";

export let text:string;
export let extras = "";
</script>

<button 
    class="{(color === '#F1DB18' || color === '#f497da') ? 'text-grey' : 'text-tan'} font-bold text-{text} hover:opacity-80 {extras}"
    style="background-color:{color};"
    on:click>{name}</button>