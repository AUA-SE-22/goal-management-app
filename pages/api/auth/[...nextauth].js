import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
export const authOptions = {
  // Configure one or more authentication providers
  
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  providers: [
    KeycloakProvider({
        clientId: "login-app",
        clientSecret: "mCGzxRMDNLEZKcqZ1i094BwkZKvgrOfF",
        issuer: "http://localhost:8181/auth/realms/goal-management",
    }),
  ],
}
export default NextAuth(authOptions)