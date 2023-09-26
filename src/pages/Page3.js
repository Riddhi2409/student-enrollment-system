import React from 'react'
import { useSelector } from 'react-redux'

function Page3() {
    const studentName =useSelector((state)=> state.student.name);
    const studentAge =useSelector((state)=> state.student.age);
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen text-white font-mono text-lg'>
      <h1>Your name {studentName} aged {studentAge} has been added to student system. You may now exit.

</h1>
    </div>
  )
}

export default Page3
