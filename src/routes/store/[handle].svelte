<script lang="ts">
    import AddToCart from "$lib/components/Cart/AddToCart.svelte";

    export let singleProduct:any;
    export let productType:any;
</script>

<div>
    <img class="h-64" src="{singleProduct.images[0].node.src}" alt="">
    <div class="flex justify-start items-end">
        <h1 class="text-6xl -mb-4 text-brown font-extrabold tracking-normal">{singleProduct.title}</h1>
        <p class="text-m m-2 mx-6 px-2 rounded py-1 bord w-fit h-fit text-white font-bold italic"
        style="background-color: {productType.color};"
        >{productType.name}</p>

    </div>

    <h1>{singleProduct.description}</h1>
    <h1>{singleProduct.price}</h1>
    <AddToCart {singleProduct}/>
</div>