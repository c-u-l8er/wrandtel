<script lang="ts">
    // import { Clerk } from "clerk-sveltekit";
    // import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";
    import AdminPanel from "./AdminPanel.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignInButton from "clerk-sveltekit/client/SignInButton.svelte";
    import SignOutButton from "clerk-sveltekit/client/SignOutButton.svelte";
    import { goto } from "$app/navigation"; // Import goto

    function handleSignIn() {
        goto("/33"); // Programmatically navigate after sign-in
    }

    function handleSignOut() {
        goto("/"); // Programmatically navigate after sign-out
    }
</script>

<svelte:head>
    <title>Lab #33 Admin Control Panel</title>
    <meta name="description" content="Admin Control Panel for Lab #33" />
</svelte:head>

<br />
<br />
<br />

<SignedOut>
    <div class="container">
        <h1>Lab #33 Admin Control Panel</h1>
        <p>You must be signed in to access this panel.</p>
        <SignInButton
            class="get-started-btn"
            afterSignInUrl="/33"
            afterSignUpUrl="/33"
        />
    </div>
</SignedOut>

<SignedIn>
    <div class="container">
        <h1>Lab #33 Admin Control Panel</h1>
        <AdminPanel />
        <br />
        <SignOutButton
            class="get-started-btn"
            signOutCallback={handleSignOut}
        />
    </div>
</SignedIn>

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
