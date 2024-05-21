import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import posthog from "posthog-js";

const isProtectedRoute = createRouteMatcher([
  '/me(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

