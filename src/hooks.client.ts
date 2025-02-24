import type { HandleClientError } from "@sveltejs/kit";
// To use Clerk components:
import { initializeClerkClient } from "clerk-sveltekit/client";
// Or for headless mode:
// import { initializeClerkClient } from 'clerk-sveltekit/headless'
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
  afterSignInUrl: "/33/",
  afterSignUpUrl: "/33/",
  signInUrl: "/auth/sign-in",
  signUpUrl: "/auth/sign-up",
});

export const handleError: HandleClientError = async ({ error, event }) => {
  console.error(error, event);
};
