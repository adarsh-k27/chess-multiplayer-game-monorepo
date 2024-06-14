import React from 'react'
type Props={
    isIcon:Boolean
}
function Indicator({isIcon}:Props) {
  return (
    <div className='w-10 h-10 absolute flex items-center justify-center  text-center top-6 left-5'>
         <div className='w-full h-full bg-indicater rounded-full '></div>
    </div>
  )
}

export default Indicator