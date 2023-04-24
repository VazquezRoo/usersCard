import React from 'react'

function ModalAviso({isShowFormAlert, changeModalAlert, isUserIdToEdit}) {
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowFormAlert ?'opcity-100 visible' : 'opacity-0 invisible'}`}>

        <div className='fixed  self-center justify-self-center w-[300px] h-[150px] border-2 border-black flex flex-col justify-center align-middle gap-3 bg-white'>
        <h3>{isUserIdToEdit ? 'Se guardaron los cambios exitosamente': 'Se creo el usuario exitosamente'}</h3>
        <button onClick={changeModalAlert} className='border-[1px] w-[100px] h-[30px] flex mx-auto justify-center bg-blue-700 hover:bg-blue-500 text-white'>Aceptar</button>
        </div>
        
    </div>
  )
}

export default ModalAviso