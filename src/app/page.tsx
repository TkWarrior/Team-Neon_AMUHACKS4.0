/* eslint-disable @next/next/no-async-client-component */
"use client"
import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleGetStarted = () => {
      router.push("/get-started");
  }

  return  (<div className="min-h-screen bg-black text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-10">
          {/* Left Section */}
          <div
            className="space-y-8 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-xl"
            
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Analyze Your<span className="text-blue-400">Repo </span> Like a 
              Pro
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Work together in real-time with syntax highlighting, version
              control, and more — all inside one powerful, beautiful editor.
            </p>
            <button onClick = {handleGetStarted} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
              Get Started
            </button>
          </div>
  
          {/* Right Section - Spline Model */}
          <div
            className="h-[500px] md:h-[600px] w-full"
          >
            <Spline scene="https://prod.spline.design/858qRsXHwgE20qu7/scene.splinecode" />
          </div>
        </div>
      </div>)
}
