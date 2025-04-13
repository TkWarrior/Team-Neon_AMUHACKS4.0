"use client"
import { Button } from "@/components/ui/button";
import {Sidebar,SidebarGroup,SidebarGroupContent, SidebarContent, SidebarGroupLabel, SidebarHeader, SidebarMenuItem ,SidebarMenuButton, useSidebar} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { Bot, LayoutDashboard, Plus} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    {
        title: "Dashboard",
        url: '/dashboard',
        icon: LayoutDashboard,
    },
     {
        title: "Question & Answer",
        url: '/qa',
        icon: Bot,
    },
   
]

const projects = [
    {
        name:'Project 1',
    },
    {
        name:'Project 2',
    },
    {
        name:'Project 3',
    },
    {
        name:'Project 4',
    },
    
]
export function AppSidebar(){
    const pathname = usePathname()
    const { open} = useSidebar()
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                {open && (
                    <h1 className="text-3xl font-black ">Repo Lens</h1>
                )

                }
                </div>
            </SidebarHeader>
            <SidebarContent>
                
                    <SidebarGroup>
                        {/* Add content here if needed */}
                        <SidebarGroupLabel>
                            Application
                        </SidebarGroupLabel>
                        <SidebarGroupContent className="space-y-2 list-none">
                        {items.map(item=>{
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className={cn({
                                                '!bg-primary !text-white':pathname === item.url
                                        },'list-none')}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                        </SidebarGroupContent>
                    </SidebarGroup>
                
                    <SidebarGroup>
                        {/* Add content here if needed */}
                        <SidebarGroupLabel>
                            Your Projects
                        </SidebarGroupLabel>
                        <SidebarGroupContent className="space-y-2 list-none">
                        {projects.map(project=>{
                            return (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton asChild>
                                        <div>
                                           <div className={cn(
                                            'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                                            {
                                                'bg-primary text-white':true
                                            }
                                           )}>
                                            {project.name[0]}
                                            </div> 
                                            <span>{project.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                    
                                </SidebarMenuItem>
                            )
                        })}
                        
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <div className="h-2"></div>
                    <SidebarMenuItem>
                        <Link href='/create'>
                            <Button variant="outline" className="w-full" size="sm">
                                <Plus/>
                                Create Project
                            </Button>
                        </Link>
                    </SidebarMenuItem>

            </SidebarContent>
        </Sidebar>
        
    )

   
}