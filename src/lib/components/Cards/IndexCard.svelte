<script lang="ts">
export let route:string;
export let color:string;
export let extras = "";
export let image:string;
</script>


<a sveltekit:prefetch href="{route}" class="aspect-w-1 aspect-h-1">
    <div class="bg-{image} bg-no-repeat bg-cover bg-center {extras}">
        <div class="bg-{color} w-fit">
            <p class="font-extrabold py-2 px-6 text-5xl tracking-wide text-tan"><slot/></p>
        </div>
    </div>
</a>