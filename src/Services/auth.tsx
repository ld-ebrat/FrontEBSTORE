import { fetch_GET } from "../utils/request"


export const authUser = async (): Promise<boolean>=>{
    const token = localStorage.getItem("token")
    if(token){
        try {
            const response = await fetch_GET({path:"/read-info",header:`${token}`})
            if(response._id){
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log("Ha ocurrido un erro", error)
            return false
        }
    }else{
        return false
    }
}