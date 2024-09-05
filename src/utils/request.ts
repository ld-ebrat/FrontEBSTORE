import { FetchResponse, Props } from "../types"

const URL:string = "http://localhost:5000/"

const fetch_GET = async (props: Props): FetchResponse<any> =>{
    try {
        const response = await fetch(URL+props.path,{
            method: "GET",
            headers: {
                "authorization":`${props.header}`,
                "Content-Type":"application/json"
            }
        })
    
        if(response.ok){
            const data = response.json()
            return data
        }
    } catch (error) {
        return {"error":error}
    }
    
}

const fetch_POST = async (props: Props): FetchResponse<any> =>{

    try {
        console.log(props.body, props.path)
        const response = await fetch(URL+props.path,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(props.body)
        })

        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        return {"error":error}
    }
    
}
export {
    fetch_GET,
    fetch_POST
}