import { auth } from "@/features/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function isLoggedIn() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return session;
}
