import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    // Use the `navigate` function to navigate to another page
    navigate('/chatbot');
  };

  return (
    <div className='flex flex-col items-center gap-4 font-serif text-white'>
      <p className='text-2xl'>Enter into Student Info System</p>
      <button onClick={handleEnrollClick} className='border-2 p-2 bg-slate-600 text-white rounded-md hover:bg-slate-700'>Enroll Now</button>
    </div>
  );
}

export default Page1;






