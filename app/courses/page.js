import CourseCard from '@/components/CourseCard'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-between items-center gap-20 mt-20'>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='text-2xl'>Programming Languages</h2>

            <div className='flex justify-center items-center gap-10'>
                <CourseCard />
                <CourseCard />
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='text-2xl'>Web Development</h2>

            <div className='flex justify-center items-center gap-10'>
                <CourseCard />
                <CourseCard />
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='text-2xl'>Software Engineering</h2>

            <div className='flex justify-center items-center gap-10'>
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    </div>
  )
}

export default page