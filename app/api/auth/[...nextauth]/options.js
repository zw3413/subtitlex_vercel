import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"
import EmailProvider from "next-auth/providers/email"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"  

const prisma = new PrismaClient();

export const options = {
    adapter:PrismaAdapter(prisma),
    providers : [
        GoogleProvider({
            profile(profile){
                console.log("Profile Google:", profile)
                const sub = profile.sub
                return {
                    id: sub,
                    image : profile.picture,
                    name: profile.name,
                    email : profile.email,
                    accounts : profile.accounts,
                    sessions : profile.sessions,
                    stripe_customer_id : null
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_Secret
        }),
      
        // TwitterProvider({
        //     profile(profile){
        //         console.log("Profile Twitter:", profile)
        //         const sub = profile.sub
        //         return {
        //             id: sub,
        //             image : profile.picture,
        //             name: profile.name,
        //             email : profile.email,
        //             accounts : profile.accounts,
        //             sessions : profile.sessions,
        //             stripe_customer_id : null
        //         }
        //     },
        //     clientId: process.env.TWITTER_ID,
        //     clientSecret: process.env.TWITTER_SECRET
        //   }),
        //   GitHubProvider({
        //     profile(profile){
        //         console.log("Profile GitHub:", profile)
        //         return {
        //             id: profile.id,
        //             image : profile.avatar_url,
        //             name: profile.name,
        //             email : profile.email,
        //             accounts : profile.accounts,
        //             sessions : profile.sessions,
        //             stripe_customer_id : null
        //         }
        //     },
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret:process.env.GITHUB_Secret
        // }),
        EmailProvider({
            profile(profile){
                console.log("Profile Email:", profile)
                return {
                    id: profile.id,
                    image : profile.avatar_url,
                    name: profile.name,
                    email : profile.email,
                    accounts : profile.accounts,
                    sessions : profile.sessions,
                    stripe_customer_id : null
                }
            },
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                }
              },
            from: process.env.EMAIL_FROM
        })

    ],
    // callbacks:{
    //     async jwt({token, user}){
    //         if(user) token.role = user.role
    //         return token;
    //     },
    //     async session({session, token}){
    //         if(session?.user) session.user.role = token.role
    //         return session;
    //     }
    // }
 
}