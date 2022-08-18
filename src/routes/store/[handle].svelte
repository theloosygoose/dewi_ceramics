<script lang="ts">
    import AddToCart from "$lib/components/Cart/AddToCart.svelte";

    export let singleProduct:any;
    export let productType:any;
</script>

<div>
    <a href="/store/all" class="text-brown text-lg italic font-extrabold hover:text-tan"> Back to Products</a>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="h-[350px] sm:h-[400px] md:h-[600px] w-full self-center justify-self-center">
            <img class="h-full w-full object-cover object-center" src="{singleProduct.images[0].node.src}" alt="">
        </div>
        <div class="grid grid-cols-1 h-fit gap-2 mx-5">
            <div class="flex justify-start items-center">
                <h1 class="text-5xl text-brown font-extrabold leading-[0.78] tracking-wide">{singleProduct.title}</h1>
                <p class="text-m mx-6 px-2 py-1 bord w-fit h-fit text-tan font-bold"
                style="background-color: {productType.color};"
                >{productType.name}</p>
            </div>

            <p class="ml-4 mt-2 text-gray-900 font-medium tracking-normal self-start justify-self-center leading-snug">{singleProduct.description}</p>
            <h2 class="text-brown font-bold text-3xl self-start">${singleProduct.price}</h2>
            <AddToCart {singleProduct}/>
        </div>
    </div>
</div>