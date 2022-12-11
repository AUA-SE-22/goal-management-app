import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
        clientId: "login-app",
        clientSecret: "mCGzxRMDNLEZKcqZ1i094BwkZKvgrOfF",
        issuer: "http://localhost:8181/auth/realms/goal-management",
    }),
  ],
}
export default NextAuth(authOptions)