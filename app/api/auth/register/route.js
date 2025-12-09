import User from "@/model/User";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, password, confirmPassword } = await req.json();

        await connectDB();

        let existUser = await User.findOne({email})

        if (existUser) {
            return NextResponse.json(
                {message: "User already exists!"},
                {status: 400}
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                {message: "Password must be of at least 6 characters"},
                {status: 400}
            )
        }

        if (password != confirmPassword) {
            return NextResponse.json(
                {message: "Passwords do not match"},
                {status: 400}
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = await User.create({
            name, email, password: hashedPassword
        })

        return NextResponse.json(
            user,
            {status: 201}
        )

    } catch (error) {
        return NextResponse.json(
            {message: `register error ${error}`},
            {status: 500}
        )
    }
}