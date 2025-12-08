import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-stretch p-15 gap-10 pb-1 mt-10'>
        <div className='flex justify-start items-center gap-40'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl'>CodeHub</h2>

            <div className='w-72'>
              <p>A platform where students can learn various CS domain-specific tools such as programming languages, web development, AI, machine learning, mobile app development, software engineering etc.</p>
            </div>
          </div>

          <div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Start Learning</h3>
          </div>
          <div>
            <h3>Terms and Conditions</h3>
          </div>
        </div>

        <div>
          <h2 className='text-center'>All Rights Reserved</h2>
        </div>
    </div>
  )
}

export default Footer