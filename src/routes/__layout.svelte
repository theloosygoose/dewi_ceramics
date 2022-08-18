<script lang="ts">
    import '../app.css';
    import { page } from '$app/stores';

    import Header from '$lib/components/Header/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Alert from '$lib/components/Alert.svelte';
    
    import { createCart } from '$lib/utils/shopify';
    import { onMount } from 'svelte';
    import { getCartItems } from '$lib/stores/cartStores';

    let cartId:string;
    let checkoutUrl:string;
    let currentDate = Date.now();

    onMount(async () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cartId') === null){
            const newCart = callCreateCart();
            localStorage.setItem('cartId',JSON.stringify((await newCart).cartId));
            localStorage.setItem('checkoutUrl', JSON.stringify((await newCart).checkoutUrl));
            localStorage.setItem('cartCreatedAt', JSON.stringify(Date.now()));

        } else if (currentDate - parseInt(JSON.parse(localStorage.getItem('cartCreatedAt') || '')) > 1000 * 60 * 60 * 24 * 7) {
            localStorage.clear()
            const newCart = callCreateCart();
            localStorage.setItem('cartId',JSON.stringify((await newCart).cartId));
            localStorage.setItem('checkoutUrl', JSON.stringify((await newCart).checkoutUrl));
            localStorage.setItem('cartCreatedAt', JSON.stringify(Date.now));
        }
    }
    getCartItems();
  });

  async function callCreateCart() {
    const cartRes = await createCart();
    return {
        cartId: await cartRes.body.cartCreate.cart.id,
        checkoutUrl: await cartRes.body.cartCreate.cart.checkoutUrl,
    }
  }
</script>

<main class="bg-light-tan">
    <Header/> 
    <Alert/>
        <slot/>
    <Footer/>
</main>
