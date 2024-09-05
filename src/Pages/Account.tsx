import React from 'react';
import NavBar from '../Components/NavBar';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    return (
        <>
            <NavBar />
            <section className='pt-36 w-screen flex'>
                <section className='flex flex-col gap-4 pl-14 w-[30%]'>
                    <div className='flex items-center gap-3'>
                        <img src='../../public/Images/man-3.png'></img>
                        <span className='text-2xl font-semibold'>Leiner Ebrat</span>
                    </div>
                    <hr className='border-gray-300'></hr>
                    <div className='flex items-start'>
                        <img src='../../public/Images/user-B.png' />
                        <div className='pl-2 flex flex-col gap-2'>
                            <button className='flex items-center gap-2 hover:text-gen font-bold'>My Profile</button>
                            <div className='flex flex-col items-start'>
                                <button onClick={() => navigate("/account/personalInformation")} className='flex items-center gap-2 hover:text-gen'><img src='../../public/Images/flecha-derecha_B.png' />Personal Information</button>
                                <button onClick={() => navigate("/account/address")} className='flex items-center gap-2 hover:text-gen'><img src='../../public/Images/flecha-derecha_B.png' />Address</button>
                            </div>
                        </div>
                    </div>
                    <hr className='border-gray-300'></hr>
                    <div className='flex items-start'>
                        <img src='../../public/Images/order.png' />
                        <div className='pl-2 flex flex-col gap-2'>
                            <button className='flex gap-2 items-center hover:text-gen font-bold'>Order History</button>
                            <div className='flex flex-col items-start'>
                                <button className='flex items-center gap-2 hover:text-gen' onClick={() => navigate("/account/order-active")}><img src='../../public/Images/flecha-derecha_B.png' />Active</button>
                                <button className='flex items-center gap-2 hover:text-gen' onClick={() => navigate("/account/order-pending")}><img src='../../public/Images/flecha-derecha_B.png' />Pending</button>
                                <button className='flex items-center gap-2 hover:text-gen' onClick={() => navigate("/account/order-cancell")}><img src='../../public/Images/flecha-derecha_B.png' />Canceled</button>
                            </div>
                        </div>
                    </div>
                    <hr className='border-gray-300'></hr>
                    <button className='flex gap-2 items-center hover:text-gen font-bold'><img src='../../public/Images/heart-B.png' />Whishlist</button>
                    <hr className='border-gray-300'></hr>
                    <button className='flex gap-2 hover:text-gen font-bold' onClick={() => navigate("/account/change-password")}><img src='../../public/Images/key.png' />Change Password</button>
                    <hr className='border-gray-300'></hr>
                    <button className='flex gap-2 hover:text-gen font-bold' onClick={() => {
                        localStorage.clear()
                        navigate("/login")
                    }}><img src='../../public/Images/exit.png' />Log Out</button>
                </section>
                <section className='w-full'>
                    <Outlet />
                </section>
            </section>
        </>
    );
}

export default Account;
