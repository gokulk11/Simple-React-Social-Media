import React from 'react'

const HeroTop = () => {
  return (
    <div>
        <div className='flex justify-between p-4 pt-6  items-center h-fit'>
            <h4 className=' text-[.7rem] font-semibold'>Top 20 Today</h4>
            <button className=' text-[.6rem] pr-2 font-semibold bg-slate-200 p-1 pl-[.4rem]
             rounded-lg'>View All</button>
        </div>
    </div>
  )
}

export default HeroTop