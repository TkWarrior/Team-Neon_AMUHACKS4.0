import {Sidebar,SidebarGroup,SidebarGroupContent, SidebarContent, SidebarGroupLabel, SidebarHeader, SidebarMenuItem ,SidebarMenuButton} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { Bot, LayoutDashboard} from "lucide-react";
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
export function AppSidebar(){
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarHeader>
                Repolens Logo
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroup>
                        {/* Add content here if needed */}
                        <SidebarGroupLabel>

                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                        {items.map(item=>{
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className={cn({
                                                '!bg-primary !text-white':pathname === item.url
                                        })}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        
    )

   
}