import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "97d8c2805811f81e46b8",
      clientSecret: "1724540b9860e295f8c708bf49e946aafa96aacd",
    }),
  ],
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
