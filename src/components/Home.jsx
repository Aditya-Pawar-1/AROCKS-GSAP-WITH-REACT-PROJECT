import React, { useRef } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = ({ MenuOpen, setMenuOpen }) => {
    const homeRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        gsap.to(homeRef.current, {
            y: '-100%',
            delay: 2,
            duration: 0.5
        })
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1,
            duration: 0.5
        })
    })

    return (
        <div className='h-screen'>
            <div ref={homeRef} className='h-screen w-full z-10 bg-[#111] fixed'></div>
            <div ref={pageRef} className='h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]'>
                <Navbar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
                <Hero />
            </div>
        </div>
    )
}

export default Home