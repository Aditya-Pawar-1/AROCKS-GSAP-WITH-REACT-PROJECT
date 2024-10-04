import React from 'react'

const MenuRight = ({ MenuOpen, setMenuOpen }) => {

  const MenubarClose = () => {
    setMenuOpen(false);
  }

  return (
    <div className='w-1/3 h-full flex flex-col items-center justify-around p-12 relative'>
      <button className='text-white absolute top-0 right-0 p-4' onClick={MenubarClose}>Close</button>
      <h3 className='text-4xl font-bold '>
        ABOUT <br /> STORY <br /> PROJECTS <br /> RELEASES
      </h3>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-[5vw] font-base text-sm items-center justify-center'>
          <h5>Follow <br />(AROCK®)</h5>
          <div className='flex flex-col'>
            <h5>Instagram</h5>
            <h5>Youtube</h5>
          </div>
        </div>
        <div className='flex gap-[5vw] font-base text-sm items-center justify-center'>
          <h5>Listen <br />(AROCK®)</h5>
          <div className='flex flex-col'>
            <h5>Spotify</h5>
            <h5>MixCloud</h5>
          </div>
        </div>
      </div >
    </div>
  )
}

export default MenuRight