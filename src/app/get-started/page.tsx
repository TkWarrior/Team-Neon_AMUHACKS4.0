"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function GetStartedPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in?redirect_url=/dashboard");
    }
  }, [isSignedIn]);

  return <div className="text-white p-8">Redirecting...</div>;
}
