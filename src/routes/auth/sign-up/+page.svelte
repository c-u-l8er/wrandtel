<script lang="ts">
    import SignUp from "clerk-sveltekit/client/SignUp.svelte";
</script>

<svelte:head>
    <title>Sign Up</title>
    <meta name="description" content="" />
</svelte:head>

<br />
<br />
<br />

<SignUp redirectUrl="/33" />

<br />
<br />

<style>
    .container {
        max-width: 800px;
        margin: 2em auto;
        padding: 2em;
        background-color: #f0f0f0;
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
