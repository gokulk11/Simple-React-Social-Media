import React from 'react'
import HeroTop from './HeroTop'
import HeroList from './HeroList'
import Main from './Main'


const Hero = () => {
  return (
    <div className=' h-[85%] rounded-[20px] mt-7 bg-slate-50'>
        <HeroTop/>
        <HeroList/>
        <Main/>
    </div>
  )
}

export default Hero