<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>
<main class="bg-light-tan">
    <Header />
    <slot/>
    <Footer/>
</main>
