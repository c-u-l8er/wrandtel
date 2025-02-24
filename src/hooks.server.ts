import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { handleClerk } from "clerk-sveltekit/server";
import { CLERK_SECRET_KEY } from "$env/static/private";

export const handle: Handle = sequence(
  handleClerk(CLERK_SECRET_KEY, {
    debug: true,
    protectedPaths: [
      "/33/ideas",
      "/33/concepts",
      "/33/prototypes",
      "/33/products",
      "/33/expirements",
      "/33/solutions",
    ],
    signInUrl: "https://wrand.cc/auth/sign-in",
  }),
);
