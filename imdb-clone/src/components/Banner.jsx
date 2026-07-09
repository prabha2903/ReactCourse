import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://i.pinimg.com/736x/a7/d2/45/a7d24524d2d02bc104ec0c0aff36dcf6.jpg)`}}>
        <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4'>Avengers EndGame</div>   
    </div>
  )
}

export default Banner