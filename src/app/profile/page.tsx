import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/features/auth";
import { signOut } from "@/features/auth/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p className="text-lg">{session.user.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-lg">{session.user.email}</p>
          </div>
          {session.user.image && (
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Image</p>
              <img src={session.user.image} alt="Profile" className="h-16 w-16 rounded-full" />
            </div>
          )}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant="destructive" className="w-full" type="submit">
              Sign out
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
