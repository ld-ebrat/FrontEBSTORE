import React from 'react';
import { Info } from '../utils/type';

interface Props {
    information: Info
}
const ProductRecent: React.FC<Props> = ({ information }) => {
    const visibilityDiscount: string = information.discount == "yes" ? ("") : ("hidden")
    return (
        <>
            <div className='text-black w-full bg-white pb-3 border border-gray-300 rounded-md'>
                <div className='flex w-full justify-center py-5 bg-gray-200'>
                    <img src={information.urlImg} className='h-36 brightness-110 mix-blend-multiply'></img>
                </div>
                <div className='items-center'>
                    <div className='flex flex-col py-5 px-3 gap-y-1'>
                        <span className='text-xl font-bold'>{information.name}</span>
                        <div className='flex gap-3'>
                            <span className='text-[#6527BE] font-black'>{"$" + information.price}</span>
                            <span className={`${visibilityDiscount} text-gray-700 line-through`}>{`$${Math.round(information.price - (information.price* (information.discountRate / 100)))}`}</span>
                        </div>
                    </div>
                    <div className='px-3 w-[85%] flex gap-x-5'>
                        <a className='bg-[#6627be] text-white py-2 px-3 rounded-md flex gap-2 items-center justify-center hover:cursor-pointer text-sm'> <img src='/Images/carr-w-p.png' className='h-4' /> ADD TO CARRT</a>
                        <a className='hover:cursor-pointer'><img src='/Images/heart-conto.png' onMouseEnter={(e) => { e.currentTarget.src = "/Images/heart-complet.png" }} onMouseOut={(e) => { e.currentTarget.src = '../../public/Images/heart-conto.png' }} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductRecent;
