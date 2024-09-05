import React from 'react';

const Footer: React.FC = () => {
    const color:string = "text-[#6527BE]"
    return (
        <>
            <div className='w-full py-14 bg-gray-200'>
                <div className='flex justify-center gap-24 px-28'>
                    <div className='flex flex-col gap-3'>
                        <img src='/Images/log.webp' className='w-48'></img>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto quibusdam quia fuga omnis repellendus consectetur quam numquam, fugit, nobis sapiente illum. Obcaecati dolor assumenda beatae accusamus molestias voluptate cumque?
                        </div>
                    </div>
                    <div>
                        <span className='font-bold'>ACCOUNT</span>
                        <div></div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='font-bold'>INFORMATION</span>
                        <div>
                            <ul className='flex flex-col gap-3'>
                                <li className={`hover:${color} hover:cursor-pointer`}>About Us</li>
                                <li className={`hover:${color} hover:cursor-pointer`}>FAQ</li>
                                <li className={`hover:${color} hover:cursor-pointer`}>Terms & conditions</li>
                                <li className={`hover:${color} hover:cursor-pointer`}>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='font-bold'>CONTACT</span>
                        <div>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <div className='flex gap-2'>
                                        <img src='/Images/location marker.png'></img>
                                        <span>Direccion</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex gap-2'>
                                        <img src='/Images/email.png'></img>
                                        <span>ebrat.ld@gmail.com</span>
                                    </div>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
