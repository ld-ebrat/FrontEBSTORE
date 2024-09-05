import React, { useEffect, useState } from 'react';

type Props = {
    status: string
}

const OrderHistory: React.FC<Props> = ({ status }) => {
    const [colorStatus, setColorStatus] = useState<string>("")
    useEffect(()=>{
        setColorStatus(()=>{
            if(status==="Activo"){
                return 'text-green-500'
            }else{
                if(status==="Pendiente"){
                    return 'text-yellow-500'
                }
            }
            return "text-red-500"
        })
    },[status])
    return (
        <>
            <h3 className='font-bold px-20 text-lg'>Order {status}</h3>
            <div className='w-full px-20 flex flex-col gap-6 pt-5'>
                <div className='flex w-full justify-between border border-gray-200 p-4'>
                    <div className='flex flex-col'>
                        <h6 className='font-bold'>Order Number</h6>
                        <span>sdg943963409</span>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-bold'>Canceled At</h6>
                        <span>01 January 2020</span>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-bold'># Products</h6>
                        <span>10</span>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-bold'>Total</h6>
                        <span>$5000</span>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='font-bold'>Status</h6>
                        <span className={`${colorStatus}`}>{status}</span>
                    </div>
                    <div className='flex flex-col'>
                    <button className='bg-gen text-white p-2 rounded-lg'>VIEW ORDER</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default OrderHistory;
