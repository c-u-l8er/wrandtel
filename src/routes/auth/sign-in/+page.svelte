<script lang="ts">
    import SignIn from "clerk-sveltekit/client/SignIn.svelte";
</script>

<svelte:head>
    <title>Sign In</title>
    <meta name="description" content="" />
</svelte:head>

<br />
<br />
<br />

<div class="container">
    <SignIn redirectUrl="/33" />
</div>

<br />
<br />

<style>
    .container {
        max-width: 475px;
        margin: 2em auto;
        border-radius: 8px;
        text-align: center;
    }

    h1 {
        color: #333;
        margin-bottom: 1em;
    }

    p {
        color: #555;
        margin-bottom: 1.5em;
    }
</style>
