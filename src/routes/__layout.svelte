<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { createCart} from '$lib/utils/shopify';

    import { onMount } from 'svelte';
    import { getCartItems } from '$lib/stores/cartStores'

    let cartId;;
    let checkoutUrl;
    let cartCreatedAt;
    let cartItems;

    onMount(async () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cartId') === null){
            const newCart = callCreateCart();
            localStorage.setItem('cartId',(await newCart).cartId)
            localStorage.setItem('checkoutUrl', (await newCart).checkoutUrl)

            cartId = (await newCart).cartId;
            checkoutUrl = (await newCart).checkoutUrl;

        } else {
            cartId = localStorage.getItem('cartId');
            checkoutUrl = localStorage.getItem('checkoutUrl')
        }

        console.log('This is my cart id: ', cartId)
        console.log('This is my checkoutUrl: ', checkoutUrl)
    }
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
    <Header />
    <slot/>
    <Footer/>
</main>
