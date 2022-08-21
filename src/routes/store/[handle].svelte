<script lang="ts">
    import AddToCart from "$lib/components/Cart/AddToCart.svelte";
    import Carousel from "svelte-flickity";
    import ProductCard from "$lib/components/Cards/ProductCard.svelte";
    import type { TagType } from '$lib/types'

    export let typesList:Array<TagType>;
    export let singleProduct:any;
    export let productType:TagType;
    export let reccomendations:any;

	const options = {
        draggable: true,
        wrapAround: true,
        prevNextButtons: true,
        lazyLoad: 1
	};

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

    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</svelte:head>

<div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        <Carousel {options} >
            {#each singleProduct.images as image }
                <div class="w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-screen m-auto"  >
                    <img class="h-full w-full object-cover object-center" src="{image.node.src}" alt="">
                </div>
            {/each}
        </Carousel> 
        <div class="grid grid-cols-1 h-fit gap-2 mx-5 lg:ml-[10%] mt-6 md:mt-0 md:self-center">
            <div class="flex justify-start items-center">
                <h1 class="text-5xl text-brown font-extrabold leading-[0.78] tracking-wide md:text-[70px]">{singleProduct.title}</h1>
                <p class="text-m mx-6 px-2 py-1 bord w-fit h-fit text-tan font-bold self-end"
                style="background-color: {productType.color};"
                >{productType.name}</p>
            </div>
            <p class="ml-4 mt-2 text-gray-900 font-medium tracking-wide self-start justify-self-start max-w-prose leading-snug md:text-xl">{singleProduct.description}</p>
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
    <section class="my-10">
        <h3 class="text-3xl font-bold text-brown tracking-wide ">Similar Products:</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-[5%]">
            {#each reccomendations as product, i}
                <ProductCard {product} {typesList} {i}/>
            {/each}
        </div>
    </section>
    <a href="/store/all" class="text-brown text-lg italic font-extrabold hover:text-tan"> Back to Products</a>
</div>