import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/chat"); // Redirect to chat page if user is authenticated
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    signIn();
    return null;
  }

  return (
    <>
      <h1>Home page</h1>
    </>
  );
}



