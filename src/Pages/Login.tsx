import React, { useEffect, useState } from 'react';
import { fetch_POST } from '../utils/request';
import { useForm } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface tex { text: string, color: string }
const Login: React.FC = () => {

    const navigate: NavigateFunction = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues:{
            "email":"",
            "pass":""
        }
    })
    const [indice, setIndice] = useState<number>(0)
    const texto: tex[] = [
        {
            text: "Calidad",
            color: "text-purp"
        },
        {
            text: "Precios Inigualables",
            color: "text-bluu"
        },
        {
            text: "Mejores Ofertas",
            color: "text-redd"
        },
    ]

    useEffect(() => {
        setInterval(() => {
            setIndice(prev => (prev + 1) % texto.length)
        }, 1500)
    }, [])

    const handleLogin= async (data: {"email":string, "pass":string})=>{
        // const props={
        //     path:"login",
        //     body:data
        // }
        const response = await fetch_POST({path:"login",body:data})
        console.log(response)
        if(response.message === "OK"){
            localStorage.setItem("token",response.token)
            setTimeout(()=>{navigate("/")},1500)
        }
        console.log(response.message)
    }
    return (
        <>
            <section className='flex bg-gen w-full h-screen items-center justify-evenly px-16 gap-2 font-bold'>
                <div id="phrase" className='w-3/4'>
                    <p className='text-5xl text-white font-semibold'>En EBSTORE, cada compra es una experiencia.
                        Encuentras <br></br> <span className={texto[indice].color}>{texto[indice].text}</span>
                    </p>
                </div>
                <div id="ls" className='bg-white text-black  w-[55%] h-[90%] rounded-xl flex justify-center items-center'>
                    <div id="login" className='gap-10 w-full flex flex-col items-center'>
                        <div onClick={()=>{navigate("/")}} className='cursor-pointer'>
                            <img src="/Images/log.webp" alt="" />
                        </div>
                        <div className='gap-2 w-full flex flex-col justify-center items-center'>
                            <p>Login</p>
                            <div className='flex flex-col items-start w-3/5'>
                                <label>
                                    <span>Correo</span>
                                </label>
                                <input {...register('email')} className='border border-black w-full py-2 px-1 outline-none' />
                            </div>
                            <div className='flex flex-col items-start w-3/5'>
                                <label>
                                    <span>Contraseña</span>
                                </label>
                                <input {...register('pass')} type='password' className='border border-black w-full py-2 px-1 outline-none' />
                            </div>
                            <button id="access-entry" onClick={handleSubmit(handleLogin)} className='bg-[#F0DE36] text-black py-3 w-3/5 border border-black'>Login</button>
                        </div>
                        <div className='flex gap-2'>
                            <label>¿Eres Nuevo?</label>
                            <a href='/singup' className='underline'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
