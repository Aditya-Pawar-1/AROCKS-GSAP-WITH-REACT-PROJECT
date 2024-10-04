import React, { useRef } from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menupage = ({ MenuOpen, setMenuOpen }) => {

    const menuRef = useRef(null)

    useGSAP(() => {
        if (MenuOpen) {
            gsap.to(menuRef.current, {
                top: 0
            })
        } else {
            gsap.to(menuRef.current, {
                top: "100%"
            })
        }
    }, [MenuOpen])

    return (
        <div ref={menuRef} className='fixed top-full bg-gradient-to-tr from-[#1A1A1A] to-[#1A1A1A] flex w-full h-screen z-50'>
            <MenuLeft />
            <MenuRight MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}  />
        </div>
    )
}

export default Menupage