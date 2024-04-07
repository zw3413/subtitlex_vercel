import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"  

const prisma = new PrismaClient();

export const options = {
    adapter:PrismaAdapter(prisma),
    providers : [
        GitHubProvider({
            profile(profile){
                console.log("Profile GitHub:", profile)
                return {
                    id: profile.id,
                    image : profile.avatar_url,
                    name: profile.name,
                    email : profile.email,
                    accounts : profile.accounts,
                    sessions : profile.sessions,
                    //stripe_customer_id : profile.id
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_Secret
        }),
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
                    //stripe_customer_id : sub
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_Secret
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