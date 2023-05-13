import React from "react";

function Modal({isShowForm, setIsShowForm, register, handleSubmit, submit, reset, setIsUserIdToEdit, isUserIdToEdit, errors}) {

    const handleClickShowModal = () => {
        setIsShowForm(e=> !e)
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        })
        setIsUserIdToEdit()
    }

  return (
    <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm ?'opcity-100 visible' : 'opacity-0 invisible'}`}>

      <form onSubmit={handleSubmit(submit)} action="" className="bg-white p-4 grid gap-4 w-[300px] relative">

        <h3 className="texr-2x1 font-bold">{isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}</h3>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-[1px] rounded-sm ${ errors.first_name ? 'bg-red-400' : 'bg-gray-100'} p-1`}
            type="text" {...register("first_name", {required:'Este campo es requerido'})}
            id="first_name"
          />
          <span className="text-[10px]">{errors.first_name && errors.first_name.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="last__name">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-[1px] rounded-sm ${ errors.last_name ? 'bg-red-400' : 'bg-gray-100'} p-1`}
            type="text" {...register("last_name", {required:'Este campo es requerido'})}
            id="last__name"
          />
          <span className="text-[10px]">{errors.last_name && errors.last_name.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
          placeholder="ejemplo@gmail.com"
            className={`border-[1px] rounded-sm ${ errors.email ? 'bg-red-400' : 'bg-gray-100'} p-1 text-center ${ errors.password ? 'placeholder:text-white/30' : 'placeholder:text-black/30'}`}
            type="email" {...register("email", {required:'Este campo es requerido'})}
            id="email"

          />
          <span className="text-[10px]">{errors.email && errors.email.message}</span>
        </div>

        <div className="grid gap-1">
          <label className={`text-xs font-semibold `} htmlFor="password" >
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Maximo 12 caracteres"
            className={`border-[1px] rounded-sm ${ errors.password ? 'bg-red-400' : 'bg-gray-100'} transition-colors-[500]  p-1 text-center ${ errors.password ? 'placeholder:text-white/30' : 'placeholder:text-black/30'}`}
            type="password" {...register("password", 
            {
            required:'Este campo es requerido', 
            maxLength:{
              value:12,
              message:'Maximo 12 caracteres'}
            }
              )
            }

            id="password"
          />
           <span className="text-[10px]">{errors.password && errors.password.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="date" {...register("birthday")}
            id="birthday"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="image">
            URL image
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="text" {...register("image_url",
           { pattern:{
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
              message: "url no valida"
            }
          }
  )}
            id="image"
          />
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>

        <i onClick={handleClickShowModal} className='bx bx-x absolute  top-2  right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
        <p className="text-[10px]"><span className="text-red-500">*</span> Campos obligatorios</p>

        <button  className="bg-purple-p text-white p-2 hover:bg-purple-p/80 transition-colors text-sm">
        {isUserIdToEdit ? "Guardar cambios" : "Agregar usuario"}
        </button>

      </form>

    </section>
  );
}

export default Modal;
