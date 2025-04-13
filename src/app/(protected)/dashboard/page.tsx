"use client"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useProject } from "@clerk/nextjs";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import  CommitLog  from "./commit-log";
const DashboardPage = () => {
  const { project } = useProject();
  return (
    <>
      <SignedIn>
        <div>
          {project?.id}
          <div className="flex items-center justify-between flex=wrap gap-y-4">
            <div className="w-fit rounded-md bg-primary px-4 py-3">
              <div className="flex items-center">
                <Github className="text-white"/>
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
            <div>
              <div className="mt-4">
                <div className="flex justify-center"></div>
                  AskQuestionCard

              </div>
            </div>
            <div className="mt-8"></div>
            <CommitLog/>
          </div>
        
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardPage