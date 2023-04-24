import React from 'react'
import "/src/UseCard.css"

function UseCard({user, deleteUser, handleClickEdit}) {

  const Mayus = (e) =>{
  const nameMayus = e.toLowerCase().split(" ");

    for (let i = 0; i < nameMayus.length; i++) {
        nameMayus[i] = nameMayus[i][0].toUpperCase() + nameMayus[i].substring(1);
    }
    return nameMayus.join(' ')      


}

  return (
    <article className='card border-black/10 border-[1px] grid grid-cols-4 w-[260px] gap-3 items-start p-2 ml-[0] rounded-[5px] bg-white'>
      <div className='row-start-2 row-span-2 col-start-3 col-span-2  '>
        
        <img  className='w-[80px] aspect-[4/5] object-cover mx-auto rounded-[40px] mr-[0] ' src={user.image_url ? user.image_url  : "/images/noprofile.jpg"} alt="" />
      </div>
      <h3 className='col-span-4 row-start-1 col-start-1 text-[19px] border-b-[1px] border-black/10 h-[50px] text-center'>{Mayus(user.first_name)} {Mayus(user.last_name)}</h3>
      <div className='grid col-span-2 justify-items-start '>
        <div className='grid justify-items-start'>
          <h4 className='text-black/30'>Correo</h4>
          <span className='text-[12px]'>{user.email}</span>
        </div>
        <div>
          <h4 className='grid justify-items-start text-black/30'>Cumpleaños:</h4>
          <span><i className='bx bx-gift mr-[10px]'></i>
         {user.birthday ? <span className='text-[12px]'>{user.birthday}</span> : <span className='text-[13px]'>No disponible</span>}</span>
        </div>
      </div>
      <div className='flex row-start-4 col-start-1 col-span-4 justify-end border-t-[1px] border-black/10 gap-1 '>
        <button onClick={()=>deleteUser
        (user.id)} className='w-[30px] h-[30px] mt-[5px] border-black border-[1px] bg-red-600 hover:bg-red-400'>
        <i class='bx bxs-trash text-white'></i>
        </button>
        <button onClick={()=>handleClickEdit(user)} className='w-[30px] h-[30px] mt-[5px] border-black border-[1px] bg-gray-400 hover:bg-gray-300'>
        <i class='bx bxs-pencil text-gray-600'></i>
        </button>
      </div>
    </article>  
    )
}

export default UseCard