import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

// Force dynamic rendering to prevent build-time errors
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const { POST, GET } = toNextJsHandler(auth);
