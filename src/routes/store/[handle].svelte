<script lang="ts">
    import AddToCart from "$lib/components/Cart/AddToCart.svelte";

    export let singleProduct:any;
    export let productType:any;

    console.log(singleProduct.collections.length)
</script>

<svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:url" content="www.dewiceramics.netlify.app/store/{singleProduct.handle}">
    <meta property="og:title" content="Dewi Ceramics Product {singleProduct.title}">
    <meta property="og:description" content="{singleProduct.description}">
    <meta property="og:image" content="/icons/logolarge.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="www.dewiceramics.netlify.app/store/{singleProduct.handle}">
    <meta property="twitter:title" content="Dewi Ceramics Product {singleProduct.title}">
    <meta property="twitter:description" content="{singleProduct.description}">
    <meta property="twitter:image" content="/icons/logolarge.png">
</svelte:head>

<div>
    <a href="/store/all" class="text-brown text-lg italic font-extrabold hover:text-tan"> Back to Products</a>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative mb-[20vh] md:mt-16">
        <div class="h-[350px] sm:h-[400px] md:h-[600px] lg:h-[900px] w-full self-center justify-self-center">
            <img class="h-full w-full object-cover object-center" src="{singleProduct.images[0].node.src}" alt="">
        </div>
        <div class="grid grid-cols-1 h-fit gap-2 mx-5 lg:ml-[10%]">
            <div class="flex justify-start items-center">
                <h1 class="text-5xl text-brown font-extrabold leading-[0.78] tracking-wide">{singleProduct.title}</h1>
                <p class="text-m mx-6 px-2 py-1 bord w-fit h-fit text-tan font-bold"
                style="background-color: {productType.color};"
                >{productType.name}</p>
            </div>
            
            <p class="ml-4 mt-2 text-gray-900 font-medium tracking-normal self-start justify-self-start max-w-prose leading-snug">{singleProduct.description}</p>
            <h2 class="text-brown font-bold text-3xl self-start">${singleProduct.price}</h2>
            <AddToCart {singleProduct}/>
            {#if singleProduct.collections.length > 0}
            <div class="ml-4 mt-2 text-brown">
                <h1 class="text-xl font-bold">Part Of:</h1>
                {#each singleProduct.collections as collection }
                <a href="/store/collections/{collection.node.handle}" class="font-medium underline">{collection.node.title} Collection</a>
                {/each}
            </div>
            {/if}
        </div>
    </div>
</div>