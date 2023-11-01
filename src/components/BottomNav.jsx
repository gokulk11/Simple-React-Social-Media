import React from 'react'

const BottomNav = () => {
  return (
    <div className=' border bottom-nav -mt-[40px] h-[60px] w-[300px] bg-white flex justify-around items-center rounded-[25px]'>
        <button>
            <img src="../home.svg" alt="" />
        </button>
        <button>
            <img src="../fav.svg" alt="" />
        </button>
        <button className='add-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path  d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </button>
        <button>
            <img src="../search1.svg" alt="" />
        </button>
        <button>
            <img className=' w-[25px] h-[25px] rounded-full' src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"alt="" />
        </button>
    </div>
  )
}

export default BottomNav