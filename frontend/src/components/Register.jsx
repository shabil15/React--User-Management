import React from 'react'

function Register() {
  return (
  <section className='bg-gray-50 dark:bg-gray-900' >
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <a href="#" className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
      <img className="w-8 h-8 mr-2" src="public\Group 31.png" alt="logo"/>
          Opus Blitz
        </a> 
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Sign Up
        </h1>
        <form className='space-y-4 md:space-y-6' action='#'>
          <div>
            <label htmlFor="name" className='block mb-2 text-sm font medium text-gray-900 dark:text-white'>Your Name</label>
            <input type="email" name="email" id='email' className='bg-gray-50 border border-gray-30 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' placeholder="Peter Parker" required="" />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
          </div>
        </form>
      </div>

    </div>
    </div>
  </section>    
  )
}

export default Register