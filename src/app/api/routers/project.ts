import { createTRPCClient } from "@trpc/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
    createProject: publicProcedure.input(
        z.object({
            name:z.string(),
            githubUrl: z.string(),
            githubToken: z.string().optional() 
        })
    ).mutation(async ({
        ctx, input 
    })=>{
        console.log('input', input)
        return true
    }), 
    getQuestions: protectedProcedure.input(z.object({projectId: z.string()})).mutation(async({ctx, input})=>{
        return await ctx.db.question.findMany({
            where:{
                projectId: input.projectId
            },
            include:{
                user: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    })
})