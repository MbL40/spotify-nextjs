import { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

import {
  NEXT_CLIENT_ID_SPOTIFY,
  NEXT_CLIENT_SECRET_SPOTIFY,
  NEXT_JWT_SECRET,
} from '@/config/front.config';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-modify-playback-state',
].join(',');

const params = {
  scope: scopes,
};

const LOGIN_URL =
  'https://accounts.spotify.com/authorize?' + new URLSearchParams(params).toString();

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: NEXT_CLIENT_ID_SPOTIFY,
      clientSecret: NEXT_CLIENT_SECRET_SPOTIFY,
      authorization: LOGIN_URL,
    }),
  ],
  secret: NEXT_JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.subscribed = user.subscribed;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    // session: async ({ session, token }) => {
    //   session.user.id = token.id;
    //   session.jwt = token.jwt;
    //   session.user.name = token.name;
    //   session.user.email = token.email;
    //   return session;
    // },
  },
};
