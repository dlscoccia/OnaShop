import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

import { dbUsers } from '../../../core/database';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'email@google.com',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        console.log({ credentials });

        return dbUsers.checkUserEmailPassword(
          credentials!.email,
          credentials!.password
        );
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400,
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case 'oauth':
            token.user = await dbUsers.oAUthToDbUser(
              user?.email || '',
              user?.name || ''
            );
            break;

          case 'credentials':
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
});
