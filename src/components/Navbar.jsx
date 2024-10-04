import React from 'react'

const Navbar = ({ setMenuOpen }) => {

  const MenubarOpen = () => {
    setMenuOpen(true);
  }

  return (
    <div className='h-[10vh] flex items-center justify-between px-4 py-4'>
      <img className='h-[7vh]' src="https://arocksworld.com/static/fav/android-chrome.png" alt="Logor" />
      <div>
        <button onClick={MenubarOpen} className='font-thin'>Menu</button>
      </div>

    </div>
  )
}

export default Navbar