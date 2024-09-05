import { NavigateFunction, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { authUser } from "../Services/auth"

const NavBar: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const [tokenAvailable,setTokenAvailable] = useState<boolean>(false)
    const token = localStorage.getItem("token")

    useEffect(()=>{
        const handleAuth = async ()=>{
            const response = await authUser()
            setTokenAvailable(()=>{

                if(response){
                    return true
                }else{
                    return false
                }
            })
        }
        handleAuth()
    },[token])

    return (
        <>
            <header className="text-black">
                <nav className="w-full fixed bg-white z-10">
                    <section className="w-full flex px-10 py-5">
                        <div className="w-1/2 flex justify-between items-end">
                            <div className="w-64" onClick={()=>navigate("/")}>
                                <img src="/Images/log.webp" />
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center justify-between rounded-full w-full bg-gray-200">
                                    <input placeholder="Buscar" className="bg-transparent px-3 w-full py-2 outline-none"></input>
                                    <div className="flex items-center justify-center border border-gen bg-gen w-1/4 rounded-e-full py-2">
                                        <img src="/Images/search.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <div className="flex items-center justify-end gap-10">
                                <div className="flex items-center gap-1">
                                    <img src="/Images/carr.png" />
                                    <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">99</span>
                                </div>
                                {
                                    tokenAvailable ? (<>
                                        <button className="flex gap-2 items-center" onClick={()=>{navigate("/account")}}>
                                            <img src="/Images/us-b.png" />
                                        </button>
                                    </>
                                    ) : (
                                        <button className="flex gap-2 items-center" onClick={() => { navigate("/login") }}>
                                            <img src="/Images/us-b.png" />
                                            <span>Entrar</span>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                    <section className="bg-gen font-semibold text-white">
                        <ul className="flex gap-10 px-10 py-3">
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Computador")}>Computadores</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Tablets")}>Tablets</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Laptops")}>Portatiles</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Video-Game")}>VideoJuegos</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Camera")}>Camaras</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Movile")}>Celulares</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Tv")}>TV</li>
                            <li className="hover:cursor-pointer" onClick={()=>navigate("/products/Headphone")}>Headphone</li>
                        </ul>
                    </section>
                </nav>
            </header>
        </>
    )
}

export default NavBar