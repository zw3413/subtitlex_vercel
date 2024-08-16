import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
//const prisma = new PrismaClient();

export const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google:", profile);
        const sub = profile.sub;
        return {
          id: sub,
          image: profile.picture,
          name: profile.name,
          email: profile.email,
          accounts: profile.accounts,
          sessions: profile.sessions,
          stripe_customer_id: null,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),

    TwitterProvider({
        profile(profile){
            console.log("Profile Twitter:", profile)
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
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET
      }),
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
      profile(profile) {
        console.log("Profile Email:", profile);
        return {
          id: profile.id,
          image: profile.avatar_url,
          name: profile.name,
          email: profile.email,
          accounts: profile.accounts,
          sessions: profile.sessions,
          stripe_customer_id: null,
        };
      },
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //   },

    //   async authorize(credentials) {
    //     //Retrieve user data here.
    //     //Refer to https://next-auth.js.org/configuration/providers/credentials

    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error('No credentials')
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials?.email,
    //       },
    //     })

    //     if (
    //       credentials?.email === user?.email &&
    //       credentials?.password === user?.password
    //     ) {
    //       return user
    //     } else {
    //       if (!credentials) {
    //         throw new Error('No credentials')
    //       }
    //       return null
    //     }
    //   },
    // }),
  ],
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  callbacks: {
    session: async ({ session, token, user }) => {
      //console.log("Session Callback:", {session, token, user});
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token, session }) => {
      //console.log("JWT Callback:", {user, token, session});
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
