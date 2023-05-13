import React from 'react'

function Footer() {
  return (
    <div className={`w-screen left-0 h-[150px] absolute bottom-0 bg-white grid justify-center text-[12px] min-[600px]:text-[15px]`}>

        <div className='flex flex-col justify-center items-start  '>
          <h4>Vazquez Roo</h4>
       
          <p><i className='bx bx-envelop'></i> vazquez.roo93@gmail.com</p>
        
          
          <p className='pt-[30px] '>&copy; 2023 Cristian Vazquez. All rights reserved.</p>
         </div>
    </div>
  )
}

export default Footer