import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const MenuLeft = () => {
    return (
        <div className='w-[65%] py-14 px-32 relative h-full'>
            <Tilt className='w-full h-full relative flex items-center justify-center'>
                <img className='absolute opacity-20 scale-[0.97] h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-50 scale-[0.94] h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-70 scale-[0.91] h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-50 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
            </Tilt>
        </div>
    )
}

export default MenuLeft