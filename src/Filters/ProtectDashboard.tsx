import { useEffect, useState } from 'react';
import Account from '../Pages/Account';
import { authUser } from '../Services/auth';
import { Navigate } from 'react-router-dom';

const ProtectDashboard = () => {

    const [navigation,setNavigation]=useState<JSX.Element>()
    useEffect(()=>{
        const handleAuth = async ()=>{
            const response = await authUser()
            setNavigation(()=>{
                if(response){
                    return <Account/>
                }else{
                    return <Navigate to={"/"}/>
                }
            })
        }
        handleAuth()
    },[])

    return navigation
}

export default ProtectDashboard;
