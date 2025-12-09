import Link from "next/link";
import React from "react";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md border-2 border-gray-500 rounded-2xl p-10 shadow-lg shadow-gray-500 flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-8">
          <form action="" className="flex flex-col gap-10">
            <h2 className="text-2xl text-center font-semibold">Create an Account</h2>

            <div className="flex flex-col gap-8">
              <input placeholder = "Name" type="text" className="border-b border-gray-500 outline-0 p-1"/>
              <input placeholder = "Email" type="text" className="border-b border-gray-500 outline-0 p-1"/>
              <input placeholder = "Password" type="text" className="border-b border-gray-500 outline-0 p-1"/>
              <input placeholder = "Confirm Password" type="text" className="border-b border-gray-500 outline-0 p-1"/>
            </div>

            <button className="bg-white p-2 rounded text-black hover:bg-gray-300">Sign Up</button>
          </form>

          <span className="flex justify-center gap-1">
            <p>Have an account?</p>
            <Link href = "/login" className="border-b border-transparent hover:border-white">Sign In</Link>
            </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
