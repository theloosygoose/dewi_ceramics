<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';


    import { onMount } from 'svelte';
    import { getCartItems } from '$lib/stores/cartStores'

    let cartId;;
    let checkoutUrl;
    let cartCreatedAt;
    let cartItems;

    onMount(async () => {})

</script>
<main class="bg-light-tan">
    <Header />
    <slot/>
    <Footer/>
</main>
