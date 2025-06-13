import React from 'react';
import NavBar from '../Components/NavBar';
import ProductRecent from '../Components/Product_Recent';
import Footer from '../Section/Home/Footer';
import FilterCategory from '../Components/FilterCategory';
//import { useParams } from 'react-router-dom';

const Products: React.FC = () => {
    //const { category } = useParams<{ category: string }>()
    return (
        <>
            <NavBar />
            <section className='flex pt-32 w-full'>
                <div className=' w-[30%] h-screen mx-4 my-10 bg-gray-200 rounded-lg px-4 py-3'>
                    <h4 className='text-xl font-semibold'>Filtrar Por:</h4>
                    <FilterCategory filters='AMD Rayzen 5' nameFilter='Procesadores'/>
                    <div>
                        <div className='border-dotted border-t-2 border-black py-4 flex flex-col gap-3'>
                            <h5 className='font-semibold'>Precios</h5>
                            <div className='flex gap-2'>
                                <input type='text' placeholder='Min' className='bg-gray-200 border border-gen rounded-md w-[45%] px-2'></input>
                                -
                                <input type='text' placeholder='Max' className='bg-gray-200 border border-gen rounded-md w-[45%] px-2'></input>
                            </div>
                        </div>
                    </div>
                    <FilterCategory filters='8' nameFilter='RAM'/>
                    <FilterCategory filters='SSD' nameFilter='Disco'/>
                </div>
                <div className='grid grid-cols-3 gap-10 px-14 py-10 w-full'>
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Mouse", price: 499, urlImg: "/Images/Productos/mouse-blue.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 80, name: "Laptop", price: 2599, urlImg: "/Images/Productos/laptop-3.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Mouse", price: 2599, urlImg: "/Images/Productos/headphone-3.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />
                    <ProductRecent information={{ discount: "yes", discountRate: 70, name: "Movile", price: 2599, urlImg: "/Images/Productos/movile.png" }} />

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Products;
