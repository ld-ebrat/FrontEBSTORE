import React from 'react';
import ProductRecent from '../../Components/Product_Recent';
import TextSubtitle from '../../Components/TextSubtitle';

const Recent: React.FC = () => {
    return (
        <>
            <section className=' pb-10 w-full px-20'>
                <TextSubtitle information='Recent Products'/>
                <div className='gap-5 grid grid-cols-4'>
                    <ProductRecent information={{name:"mouse",price:2300,urlImg:"/Images/Productos/mouse-black.png",discount:"yes",discountRate:10}}/>
                    <ProductRecent information={{name:"Laptop",price:4500,urlImg:"/Images/Productos/laptop-1.png",discount:"yes",discountRate:30}}/>
                    <ProductRecent information={{name:"watch",price:1999,urlImg:"/Images/Productos/watch-clasic.png",discount:"",discountRate:0}}/>
                    <ProductRecent information={{name:"headphone",price:3999,urlImg:"/Images/Productos/headphone-1.png",discount:"yes",discountRate:23}}/>
                </div>
            </section>
        </>
    );
}

export default Recent;
