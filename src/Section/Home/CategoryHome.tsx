import React from 'react';
import TextSubtitle from '../../Components/TextSubtitle';

const CategoryHome: React.FC = () => {
    return (
        <>
            <section className='pt-16 pb-10 w-full px-20'>
                <TextSubtitle information='Category' />
                <div className='h-[80vh] w-full flex gap-4'>
                    <div className='w-[70%]'>
                        <div className='h-1/2 flex pb-2 gap-4'>
                            <div className='w-1/2 h-full bg-emerald-100 p-5 flex hover:cursor-pointer'>
                                <span className='font-semibold text-2xl'>TV</span>
                                <div className='flex w-full justify-center'>
                                    <img src='/Images/Productos/hd-monitor.png' className='h-48' />
                                </div>
                            </div>
                            <div className='w-1/2 h-full bg-pink-100 p-5 flex hover:cursor-pointer'>
                                <span className='font-semibold text-2xl'>Headphone</span>
                                <div className='flex justify-center items-center w-2/3'>
                                    <img src='/Images/Productos/headphone-5.1.png' className='h-56 brightness-110 mix-blend-darken' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1/2 flex pt-2 gap-4'>
                            <div className='w-1/2 h-full bg-[#FFF2B5] p-5 flex hover:cursor-pointer'>
                                <span className='font-semibold'>Laptop</span>
                                <div className='flex w-full items-center justify-center'>
                                    <img src='/Images/Productos/laptop-2.png' className='w-80' />
                                </div>
                            </div>
                            <div className='w-1/2 h-full bg-orange-200 p-5 flex hover:cursor-pointer'>
                                <span className='font-semibold text-2xl'>Watch</span>
                                <div className='w-full flex justify-center'>
                                    <img src='/Images/Productos/watch-sport.png' className='w-44'/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='h-full w-[30%] bg-blue-200 p-5 flex flex-col overflow-hidden gap-20 hover:cursor-pointer'>
                        <span className='font-semibold text-2xl'>Movile</span>
                        <div className='w-full flex justify-center'>
                            <img src='/Images/Productos/movile-3.jpg' className='w-full brightness-110 mix-blend-darken' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryHome;
