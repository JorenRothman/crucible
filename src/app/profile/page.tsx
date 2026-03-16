"use client";

import { signOut, useSession } from "@/features/auth/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <h1 className="text-2xl font-bold text-center">Profile</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-600">Name</p>
            <p className="text-lg">{session.user.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Email</p>
            <p className="text-lg">{session.user.email}</p>
          </div>
          {session.user.image && (
            <div>
              <p className="text-sm font-medium text-gray-600">Image</p>
              <img src={session.user.image} alt="Profile" className="h-16 w-16 rounded-full" />
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => signOut()}
          className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
