import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { AppSidebar } from './dashboard/app-sidebar'

type Props = {
    children: React.ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className='w-full m-2'>
            <div className='flex items-center gap-2 border-sidebar shadow rounded-md p-2 px-4'>
                <div className='ml-auto'></div>
                <UserButton />
            </div>
            <div className='h-4'></div>
            <div className='border-sidebar-border bg-sidebar border shadow rounded overflow-y-scroll h-[calc(100vh-6rem)] p-4'>
                {children}
            </div>
        </main>
    </SidebarProvider>
  );
};

export default SidebarLayout