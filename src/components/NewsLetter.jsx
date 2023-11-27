import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full m-auto text-white px-4 bg-[#24262b]'>
        <div className='grid lg:grid-cols-3 mx-auto'>
            <div className='lg:col-span-2 my-4'>
                <h1>Need advice on how to improve your flow?</h1>
                <p>sign Up to join our newsletter and stay up to date</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input type="email" className='p-3 flex w-full rounded-md text-black' placeholder='email'/>
                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 border-none p-3 my-4'>
                        Notify me
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter