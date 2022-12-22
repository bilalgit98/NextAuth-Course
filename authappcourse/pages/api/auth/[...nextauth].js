import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    //google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed!";
        });

        //user exist
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("NO USER FOUND WITH EMAIL, PLEASE SIGN UP");
        }

        //compare using bcrypt
        const checkPW = await compare(credentials.password, result.password);

        if (!checkPW || result.email !== credentials.email) {
          throw new Error(
            " Username or Password Do not Match, Please Check and Try Again!"
          );
        }
        return result;
      },
    }),
  ],
});
