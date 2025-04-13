import {auth, clerkClient } from '@clerk/nextjs/server'
import { db } from '@/server/db' // Adjust the path based on your project structure
import { notFound, redirect } from 'next/navigation'

const SyncUser = async () => {
  const { userId } = await auth()
  if(!userId) {
        throw new Error('User not found')
   }


  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  if(!user.emailAddresses[0]?.emailAddress) {
    return notFound()
  }


  await db.user.upsert({
    where: { 
        emailAddress: user.emailAddresses[0]?.emailAddress ?? '' },
    
    update: {
      imageUrl: user.imageUrl,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
    },
    create: {
        id : userId,
        emailAddress : user.emailAddresses[0]?.emailAddress ?? '',
        imageUrl: user.imageUrl,
        firstName : user.firstName ?? '',
        lastName : user.lastName ?? '',
    },
})
  return redirect('/dashboard')
}

export default SyncUser