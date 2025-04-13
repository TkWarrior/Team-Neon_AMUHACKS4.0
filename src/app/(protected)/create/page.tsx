'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/trpc/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'



type FormInput = {
    repoUrl : string 
    projectName : string 
    githubToken?: string 

}

const CreatePage = () => {
    const { register, handleSubmit, reset}= useForm<FormInput>() 

    const createProject = api.project.createProject.useMutation() 

    function onSubmit(data : FormInput){
        window.alert(JSON.stringify(data, null, 2)) 
        createProject.mutate({
            githubUrl: data.repoUrl, 
            name: data.projectName, 
            githubToken: data.githubToken
        },{
            onSuccess: ()=>{
                toast.success('Project Created Successfully')
                reset() 
            },
            onError:()=>{
                toast.error('Failed to Create Project ')
            }
        }
    
    )
        return true 
    }
  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <img src="/image1.png" className='h-56 w-auto' alt="" />
        <div>
            <div>
                <h1 className='font-semibold text-2xl '>
                    Link your Github Repository 
                </h1>
                <p className='text-sm text-muted-foreground '>
                    Enter the URL of your repository to link it to D
                </p>

            </div>
            <div className='h-4'></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('repoUrl' ,{ required: true })} placeholder="Project Name" required />
                    <div className='h-2'></div>
                    <Input {...register('projectName' ,{ required: true })} placeholder="Github URL " required  type='url'/>
                    <div className='h-2'></div>
                    <Input {...register('githubToken' ,{ required: true })} placeholder="Github Token (Opetional)"  />
                    <div className='h-4'></div>
                    <Button  type='submit' disabled={createProject.isPending}> Create Project</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePage