import React from 'react';
import { StickyNavbar } from './Navbar';
import { useSelector } from 'react-redux';
import Clock from './clock';
import Quote from './Quote';

function Home() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <StickyNavbar />
      <div className='w-full h-32'></div>
      <div className='w-full flex justify-center'>
        <div className='w-1/2 p-5 rounded-md border-2 shadow-md bg-white'>
          {userInfo ? (
            <p className='text-lg text-center mb-3 font-semibold' style={{ color: '#333', fontStyle: 'italic' }}>
           <span className='text-2xl  font-bold'  style={{ color: '#4CAF50', fontStyle: 'italic' }}>Welcome back, {userInfo.name}!</span> <br />
           <h1 className='block font-sans text-center text-3xl font-semibold leading-snug tracking-normal text-black antialiased'>Quote Generator</h1>
          
             <Quote/>
         </p> 
          ) : (
            
            <p className='text-xl font-bold' style={{ color: '#333', fontStyle: 'italic' }}>
              Good day! We hope this message finds you well. Remember, every day is a new opportunity to achieve greatness. Wishing you a day filled with positivity and success! Please login to continue exploring our platform and unlocking all its features. Your journey awaits! Thank you for being part of our community.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
