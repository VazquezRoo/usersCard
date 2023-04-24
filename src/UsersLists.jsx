import React from 'react'
import UseCard from './UseCard'
import "/src/UseCard.css"

function UsersLists({users, deleteUser, handleClickEdit}) {
  return (
    <section className='card__list grid justify-center gap-2 auto-rows-auto'>
        {
            users.map((user)=>
            <UseCard key={user.id} user={user} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/>)
        }
    </section>
  )
}

export default UsersLists