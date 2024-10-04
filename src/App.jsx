import React, { useState } from 'react'
import LoadingParent from './components/Loading/LoadingParent';
import Home from './components/Home';
import Menupage from './components/Menu/Menupage';

const App = () => {

  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div className='h-screen bg-[#111]'>
      <Menupage MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <LoadingParent />
      <Home MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default App