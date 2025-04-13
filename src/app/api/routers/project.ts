import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { createTRPCClient } from "@trpc/client";
import { z } from "zod";

//////////////resolve bug //////
export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name: z.string(),
            githubUrl: z.string(),
            githubToken: z.string().optional()
          })
      ).mutation(async ({ ctx, input }) => {
       
        await ctx.db.user.upsert({
          where: { id: ctx.user.userId! },
          create: {
            id: ctx.user.userId!,
            firstName: 'Guest', 
            lastName: 'User',
            emailAddress: 'Guest@example.com' 
          },
          update: {} 
        });
      
      
        const project = await ctx.db.project.create({
          data: {
            githubUrl: input.githubUrl,
            name: input.name,
            userToProjects: {
              create: {
                userId: ctx.user.userId!
              }
            }
          }
        });
      
        return project;
      }),
    getProjects : protectedProcedure.query(async({ctx })=>{
        return await ctx.db.project.findMany({
            where:{
                userToProjects:{
                    some:{
                        userId: ctx.user.userId!
                    }
                },
                deletedAt: null 
            }
        })
    })
})