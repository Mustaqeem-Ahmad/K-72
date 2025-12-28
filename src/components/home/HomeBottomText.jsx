import React from 'react'
import { Link } from 'react-router-dom'
import MontrealClock from '../MontrealTime'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center pb-2 gap-5 font-[font2] font-semibold '>
      <p className='absolute lg:w-80 w-60 right-2 lg:right-0 bottom-40 text-sm lg:text-[1vw]'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 h-12 flex items-center lg:px-10 px-7 uppercase border-white rounded-full'>
        <Link className='text-[5.5vw] lg:mt-3 mt-1`' to={'/projects'}>Projects</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 h-12 flex items-center lg:px-10 px-7 uppercase border-white rounded-full'>
           <Link className='text-[5.5vw] lg:mt-3 mt-1` ' to={'/agence'}>Agence</Link>
      </div>
 

 <div className='absolute  lg:left-15 lg:bottom-5 bottom-20 lg:mt-0 mt-30'>
  <MontrealClock/>
 </div>
     
    </div>
  )
}

export default HomeBottomText