import React from 'react'

function CourseCard() {
  return (
    <div className='w-96 h-90 border-2 border-gray-500 bg-black rounded-3xl shadow-md shadow-gray-500 hover:scale-105 transition-all duration-300 hover:shadow-lg'>
        <figure className='flex items-center justify-center p-10 h-48 border-b-2 border-gray-500'>
            <img src="/images/course_icons/python.png" alt="Python" height={80} width={100} />
        </figure>

        <div className='p-5'>
            <h2 className='text-xl font-bold'>Python</h2>

            <p className='mt-1'>Python description</p>
        </div>
    </div>
  )
}

export default CourseCard