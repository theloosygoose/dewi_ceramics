<script lang="ts">
    export let collection:any;
</script>

<div class="aspect-w-1 aspect-h-1">
    <a href="/collections/{collection.node.handle}">
        <div style="background-image:url('{collection.node.image.transformedSrc}')" class="bg-no-repeat bg-cover bg-center w-full h-full relative">
            <div class="bg-green absolute bottom-0">
                <h3 class="font-extrabold px-2 py-2 text-2xl md:text-3xl text-left tracking-wide text-tan leading-[1]">{collection.node.title}</h3>
            </div>
        </div>
    </a>
</div>