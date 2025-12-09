import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/model/User";
import connectDB from "./mongodb";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                let email = credentials.email
                let password = credentials.password

                if (!email || !password) {
                    throw new Error("Credentials not found");
                }

                await connectDB();

                let user = await User.findOne({email});

                if (!user) {
                    throw new Error("User not found");
                }

                let isMatch = await bcrypt.compare(password, user.password)

                if (!isMatch) {
                    throw new Error("Incorrect password")
                }

                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id,
                token.name = user.name,
                token.email = user.email
            }

            return token;
        },
        session({session, token}) {
            if (session.user) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
            }

            return session;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 * 1000
    },
    pages: {
        singin: "/login",
        error: "/login"
    },
    secret: process.env.NEXT_AUTH_SECRET
};

export default authOptions;