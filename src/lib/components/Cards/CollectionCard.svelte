<script lang="ts">
    export let collection:any;
</script>

<div class="w-full h-full">
    <a href="/store/collections/{collection.node.handle}">
        <div style="background-image:url('{collection.node.image.transformedSrc}')" class="bg-no-repeat bg-cover bg-top h-96 relative">
            <div class="bg-orange absolute bottom-0">
                <h3 class="font-extrabold px-2 py-2 text-lg sm:text-2xl md:text-3xl text-left tracking-wide text-tan leading-[1]">{collection.node.title}</h3>
            </div>
        </div>
    </a>
</div>