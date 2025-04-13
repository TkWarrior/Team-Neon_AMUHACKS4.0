import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { createTRPCClient } from "@trpc/client";
import { z } from "zod";


export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name:z.string(),
            githubUrl: z.string(),
            githubToken: z.string().optional() 
        })
    ).mutation(async ({
        ctx, input 
    })=>{
        console.log('input', input)
        console.log("ctx.user.userId", ctx.user.userId);


        const project = await ctx.db.project.create({
            
            data:{
                githubUrl: input.githubUrl,
                name: input.name,
                userToProjects:{
                    create: {
                        
                        userId: ctx.user.userId!
                    }
                }
            }
        })
        return project
    })
})