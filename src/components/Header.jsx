import React from 'react'
import "/src/UseCard.css"

function Header({setIsShowForm}) {

    const handleClickShowModal = () => {
        setIsShowForm(e=> !e)
    }

  return (
    <header className='header sticky top-0 pb-3'>
        <h1 className='title_header '>Usuarios</h1>   
        <button onClick={handleClickShowModal} className="button_add_header bg-purple-p text-white p-2 hover:bg-purple-p/80 transition-colors text-sm rounded-[10px] h-[40px] mt-[10px] ">
             <i className='bx bx-plus'></i>Crear nuevo usuario
        </button>
    </header>
  )
}

export default Header