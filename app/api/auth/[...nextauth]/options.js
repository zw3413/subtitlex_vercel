import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options = {
    provider : [
        GitHubProvider({
            profile(profile){
                console.log("Profile GitHub:", profile)

                let userRole = "GitHub User"
                if(profile?.email == "dazwei@live.cn"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_Secret
        }),
        GoogleProvider({
            profile(profile){
                console.log("Profile Google:", profile)

                let userRole = "Google User"
                if(profile?.email == "dazwei@live.cn"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_Secret
        })

    ],
    callbacks:{
        async jwt({token, user}){
            if(user) token.role = user.role
            return token;
        },
        async session({session, token}){
            if(session?.user) session.user.role = token.role
            return session;
        }
    }
}