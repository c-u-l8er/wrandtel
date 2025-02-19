<script lang="ts">
    import Header from "./Header.svelte";
    import Divider from "./Divider.svelte";
    import ContactUs from "./ContactUs.svelte";
    import Footer from "./Footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<Header />

<main>
    {@render children()}
</main>

<Divider />
<ContactUs />
<Footer />

<style>
</style>
