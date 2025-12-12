"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const session = useSession();

  console.log(session?.data?.user);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md border-2 border-gray-500 rounded-2xl p-10 shadow-lg shadow-gray-500 flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-8">
          <form
            action=""
            className="flex flex-col gap-10"
            onSubmit={handleSignIn}
          >
            <h2 className="text-2xl text-center font-semibold">Login</h2>

            <div className="flex flex-col gap-8">
              <input
                placeholder="Email"
                type="text"
                className="border-b border-gray-500 outline-0 p-1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                placeholder="Password"
                type="password"
                className="border-b border-gray-500 outline-0 p-1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-white p-2 rounded-md text-black hover:bg-gray-300">
                Sign In
              </button>

              <div className="flex items-center justify-center gap-[5px]">
                <hr className="flex-grow border-gray-500" />
                <span>OR</span>
                <hr className="flex-grow border-gray-500" />
              </div>

              <button className="bg-white p-2 rounded-md text-black hover:bg-gray-300 flex justify-center items-center gap-2">
                <FcGoogle />
                <span>Sign In with Google</span>
              </button>
            </div>
          </form>

          <span className="flex justify-center gap-1">
            <p>Don't have an account?</p>
            <p
              onClick={() => router.push("/register")}
              className="hover:underline hover:cursor-pointer"
            >
              Sign Up
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
