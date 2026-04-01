import { createSafeActionClient } from "next-safe-action";
import { isLoggedIn } from "@/features/auth/utils/auth";

export const actionClient = createSafeActionClient();

export const authClient = actionClient.use(async ({ next }) => {
    const session = await isLoggedIn();

    if (!session?.user) {
        throw new Error("Not authenticated");
    }

    return next({ ctx: { user: session.user } });
});
