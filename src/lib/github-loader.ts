import { access } from "fs"
import  {Document} from "@langchain/core/documents"
import { unknown } from "zod"

export const loadGithubRepo = async (githubUrl : string, githubToken?: string) =>{
    const loader = new GithubRepoLoader(githubUrl, {
    accessToken: githubToken || '', 
    branch: 'main',
    ignoreFiles: ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'bun.lockb'],
recursive: true,
unknown: 'warn',
maxConcurrency:5

    })
    const docs = await loader.load() 
    return docs 
}

console.log(await loadGithubRepo('https://github.com/Wasid786/Team-Neon_AMUHACKS4.0'))
export const indexGithubRepo =async (projectId: string, githubUrl: string, githubToken?: string)=>{
    const docs = await loadGithubRepo(githubUrl, githubToken)
    const gllEmbeddings = await generateEmbeddings(docs) 

}
const generateEmbeddings = async (docs: Document[])=>{

}