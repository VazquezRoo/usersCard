
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UsersLists from './UsersLists'
import "/src/UseCard.css"
import ModalAviso from './components/ModalAviso'
import Footer from './components/Footer'


const BASE_URL = "https://users-crud.academlo.tech" 

function App() {
  
  //Valores para el reset del hook form
  const DEFAULT_VALUES = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    image_url: "",
  }

  //arreglo de usuarios mostrados userList
   const [users, setUsers] = useState([])


  //hook form
  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  //Estado para mostrar/ocultar el modal
  const [isShowForm, setIsShowForm] = useState(false)

  //Estado para mostrar/ocultar el modalAviso
  const [isShowFormAlert, setIsShowFormAlert] = useState(false)

  //Estado para editar/agregar user
  const [isUserIdToEdit, setIsUserIdToEdit] = useState()


  //funcion submit para el handlesubmit del hook formm, ejecuta las peticiones al back
  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null
    }
    if(!data.image_url){
      data.image_url = null
    }

    if(isUserIdToEdit){
      editUser(data)
      
      setIsShowForm(e => !e)
      setIsShowFormAlert(e => !e)
    }
    else{
      createUser(data)

      reset(DEFAULT_VALUES)
      setIsShowForm(e => !e)
      setIsShowFormAlert(e => !e)
    }



  }

  //funcion para hacer peticion al back
  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"

    axios.get(URL)
    .then((res)=> setUsers(res.data))
    .catch((err)=> console.log(err))
  }

  //efecto para obtener los datos del back
  useEffect(()=>{
    getAllUsers()

  },[])

  //Funcion ejecutada en onClick de editar

  const handleClickEdit = (data) => {
    setIsShowForm(e => !e)   
    setIsUserIdToEdit(data.id)
    reset(data)
  }


  //Funcion para crear usuario
  
  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios
    .post(URL, data)
    .then(()=>{ 
    getAllUsers()
    
    DEFAULT_VALUES()
  }
   )

    .catch((err)=> console.log(err))
  }

  //funcion para eliminar usuario

  const deleteUser = (id) => {

    const URL = BASE_URL + `/users/${id}`
    axios
    .delete(URL)
    .then(()=> 
      getAllUsers() 
      )
    .catch((err)=> console.log(err))


  }


  //funcion para editar usuario

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`
    console.log(URL
      )
    axios.patch(URL,data)
    .then(()=> {
    getAllUsers()    
    reset(DEFAULT_VALUES) 
    
  })   
    .catch((err)=> console.log(err))

  }

    const changeModalAlert = () =>{
      setIsShowFormAlert(e => !e)
      setIsUserIdToEdit()
    }

  return (
     <main className='boddy grid mx-auto gap-4 ' >
      <Header setIsShowForm={setIsShowForm}/>
      <Modal 
      isShowForm={isShowForm} 
      setIsShowForm={setIsShowForm} 
       register= {register}
        handleSubmit={handleSubmit} 
        submit={submit} 
         reset={reset}
          setIsUserIdToEdit={setIsUserIdToEdit} 
          isUserIdToEdit={isUserIdToEdit} 
          errors={errors}
          isShowFormAlert={isShowFormAlert}/>
      <UsersLists users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />

    <ModalAviso changeModalAlert={changeModalAlert}
    isShowFormAlert={isShowFormAlert}
    isUserIdToEdit={isUserIdToEdit} />
    <Footer/>
     </main>
  )
}

export default App
