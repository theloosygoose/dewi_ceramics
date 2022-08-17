<script lang="ts" context="module">

export function load ({error}:any) {
    return {
       props:{
        message:error.message
       } 
    }

}
</script>
<script lang="ts">
    export let message:string;
</script>
<div class="mx-auto ml-5 h-[80vh]">
    <h1 class="mt-20 text-center text-brown font-extrabold text-4xl">Where are You Going!!!</h1>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="h-96 mx-auto" controls>
        <source src="/error.mp4" type="video/mp4">
    </video>
    <p class="text-center text-red font-extrbold text-2xl">{message}</p>
</div>