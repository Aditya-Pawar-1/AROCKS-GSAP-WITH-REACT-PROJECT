import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Hero = () => {

  useGSAP(()=>{
    gsap.from("h1 span",{
      y:100,
      opacity:0,
      delay:2.15,
      stagger:0.1
    })
  })

  return (
    <div className='relative h-[80vh]'>
      <div className="centerText absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
        <h1  className='text-[22vw] font-black tracking-tight leading-[20vw] whitespace-nowrap'>
          <span className='inline-block'>A</span>
          <span className='inline-block'>R</span>
          <span className='inline-block'>O</span>
          <span className='inline-block'>C</span>
          <span className='inline-block'>K</span>
        <span className='absolute top-6 right-[-5%] text-6xl font-medium'>®</span>
        </h1>
        <div className="sub-heading flex justify-between items-center">
          <div>
            <h3>Play <br /> The Film</h3>
          </div>
          <div className='flex gap-12'>
            <h3>Creater <br /> Curator</h3>
            <h3>New york <br /> Los Angeles</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero