"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("/api/auth/register", {
        name, email, password, confirmPassword
      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md border-2 border-gray-500 rounded-2xl p-10 shadow-lg shadow-gray-500 flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-8">
          <form action="" className="flex flex-col gap-10" onSubmit={handleRegister}>
            <h2 className="text-2xl text-center font-semibold">Create an Account</h2>

            <div className="flex flex-col gap-8">
              <input placeholder = "Name" type="text" className="border-b border-gray-500 outline-0 p-1" onChange={(e) => setName(e.target.value)} value = {name}/>
              <input placeholder = "Email" type="text" className="border-b border-gray-500 outline-0 p-1" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <input placeholder = "Password" type="text" className="border-b border-gray-500 outline-0 p-1" onChange={(e) => setPassword(e.target.value)} value={password}/>
              <input placeholder = "Confirm Password" type="text" className="border-b border-gray-500 outline-0 p-1" onChange={(e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-white p-2 rounded-md text-black hover:bg-gray-300">Sign Up</button>

              <div className="flex items-center justify-center gap-[5px]">
                <hr className="grow border-gray-500" />
                <span>OR</span>
                <hr className="grow border-gray-500"/>
              </div>

              <button className="bg-white p-2 rounded-md text-black hover:bg-gray-300 flex justify-center items-center gap-2">
                <FcGoogle />
                <span>Sign Up with Google</span>
              </button>
            </div>
          </form>

          <span className="flex justify-center gap-1">
            <p>Have an account?</p>
            <p className="hover:underline hover:cursor-pointer" onClick={() => router.push("/login")}>Sign In</p>
            </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
