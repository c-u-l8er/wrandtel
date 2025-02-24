import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = async ({ error, event }) => {
  console.error(error, event);
};

async function initialize() {
  const { initializeClerkClient } = await import("clerk-sveltekit/client");
  const { PUBLIC_CLERK_PUBLISHABLE_KEY } = await import("$env/static/public");

  initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
    afterSignInUrl: null,
    afterSignUpUrl: null,
    signInUrl: "/auth/sign-in",
    signUpUrl: "/auth/sign-up",
  });
}

initialize();
