import React, { useEffect, useState } from 'react';
import { fetch_POST } from '../utils/request';
import { useForm } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface tex { text: string, color: string }

const SingUp: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            "email": "",
            "pass": ""
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

    const handleSingUP = async (data: { "email": string, "pass": string }) => {
        // const props={
        //     path:"login",
        //     body:data
        // }
        const response = await fetch_POST({ path: "login", body: data })
        if (response.message === "OK") {
            navigate("/")
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
                        <div onClick={() => { navigate("/") }} className='cursor-pointer'>
                            <img src="/Images/log.webp" alt="" />
                        </div>
                        <div className='gap-2 w-full flex flex-col justify-center items-center'>
                            <p className='font-bold'>SingUP</p>
                            <div className='flex flex-col items-start w-3/5'>
                                <label className='font-bold'>
                                    Correo
                                </label>
                                <input {...register('email')} className='border border-black w-full py-2 px-1 outline-none' />
                            </div>
                            <div className='flex flex-col items-start w-3/5'>
                                <label className='font-bold'>
                                    Contraseña
                                </label>
                                <input {...register('pass')} type='password' className='border border-black w-full py-2 px-1 outline-none' />
                            </div>
                            <button id="access-entry" onClick={handleSubmit(handleSingUP)} className='bg-[#F0DE36] text-black py-3 w-3/5 border border-black'>Sing Up</button>
                        </div>
                        <div className='flex gap-2'>
                            <label>¿Ya tienes Cuenta?</label>
                            <a href='/login' className='underline'>Log In</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingUp;
