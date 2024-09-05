import React from 'react';
import NavBar from '../Components/NavBar';
import ProductRecent from '../Components/Product_Recent';
import { useParams } from 'react-router-dom';

const Products: React.FC = () => {
    const { category } = useParams<{ category: string }>()
    return (
        <>
            <NavBar />
            <section className='flex pt-32 w-full'>
                <div className=' w-[30%] h-screen'></div>
                <div className='grid grid-cols-3 gap-10 px-14 py-10 w-full border-l border-gray-500'>
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
        </>
    );
}

export default Products;
