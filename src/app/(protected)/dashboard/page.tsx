"use client"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
const DashboardPage = () => {
  const { project } = useProject();
  return (
    <>
      <SignedIn>
        <div>
          <div className="flex items-center justify-between flex=wrap gap-y-4">
            <div className="w-fit rounded-md bg-primary px-4 py-3">
              <div className="flex items-center">
                <Github/>
                <div className="ml-2">
                  <p className="text-sm font-medium text-white">
                    <Link href={project?.githubUrl ?? ""} className="inline-flex items-center text-white/80 hover:underline">
                      {project?.githubUrl}
                      <ExternalLink className="ml-1 size-4" />
                    </Link>
                    
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardPage