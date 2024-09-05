import { NavigateFunction, useNavigate } from "react-router-dom"
import { Info } from "../types"

interface Props {
    information: Info
}
const OptionCategory: React.FC<Props> = ({ information }) => {

    const navigate: NavigateFunction = useNavigate()
    return (
        <>
            <div className="w-1/6 flex flex-col justify-center items-center" onClick={()=>{navigate(`${information.path}`)}}>
                <div className="w-full rounded-full bg-[#1a58bc] p-7">
                    <img src={information.urlImg} className="w-full"/>
                </div>
                <span>{information.name}</span>
            </div>
        </>
    )
}

export default OptionCategory

//import OptionCategory from "../Components/OptionCategory"
//<OptionCategory information={{ name: "Portatiles", urlImg: "/Images/portatil.webp", path: "/" }} />