import React from 'react';

function Page() {
  return (
    <div className='flex justify-center items-center'>
      <div className='p-10 px-15 bg-white flex flex-col justify-center items-center gap-10 shadow-md shadow-gray-500 text-black'>
        <h2 className='text-2xl font-bold text-black'>Create an account</h2>

        <div className='flex flex-col gap-5'>
            <input type = "email" placeholder='Email' className='p-2 border border-gray-200 text-black'/>
            
            <input type = "password" placeholder='Password' className='p-2 border border-gray-200 text-black'/>
        </div>

        <button className='p-2 bg-black rounded-md hover:bg-gray-700 text-white'>Login</button>

        <a href='/'>Sing In</a>
      </div>
    </div>
  );
}

export default Page;
