<script lang="ts">
import ProductCard from "$lib/components/Products/ProductCard.svelte";


    export let singleProduct:any;
    console.log(singleProduct)

</script>

<h1>{singleProduct.title}</h1>
<h1>{singleProduct.description}</h1>
<h1>{singleProduct.variants.edges[0].node.price}</h1>
<img class="h-64" src="{singleProduct.images.edges[0].node.src}" alt="">