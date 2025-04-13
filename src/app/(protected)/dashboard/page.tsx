"use client"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
const  DashboardPage = () => {
  const {user} = useUser();
  return (
    <>
      <SignedIn>
        <div>{user?.firstName}</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default DashboardPage