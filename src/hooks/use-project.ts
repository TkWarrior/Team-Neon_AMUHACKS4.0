import { api } from "@/trpc/react"
import { projectShutdown } from "next/dist/build/swc/generated-native"
import {useLocalStorage} from 'usehooks-ts'

const useProject = ()=>{
    const {data: projects} = api.project.getProjects.useQuery()
    const [projectId , setProjectId] = useLocalStorage('dionysus-projecId','')
    const project = projects?.find(project => project.id == projectId)
    return {
        projects,
        project, 
        projectId,
        setProjectId
    }

}

export default useProject 