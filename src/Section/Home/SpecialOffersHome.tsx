import React from 'react';
import TextSubtitle from '../../Components/TextSubtitle';
import ProductRecent from '../../Components/Product_Recent';

const SpecialOffersHome: React.FC = () => {
    return (
        <>
            <section className=' pb-10 w-full px-20'>
                <TextSubtitle information='SPECIAL OFFERS'/>
                <div className='grid grid-cols-4 gap-5'>
                    <ProductRecent information={{discount:"yes",discountRate:70,name:"Mouse",price:499,urlImg:"/Images/Productos/mouse-blue.png"}}/>
                    <ProductRecent information={{discount:"yes",discountRate:80,name:"Laptop",price:2599,urlImg:"/Images/Productos/laptop-3.png"}}/>
                    <ProductRecent information={{discount:"yes",discountRate:70,name:"Mouse",price:2599,urlImg:"/Images/Productos/headphone-3.png"}}/>
                    <ProductRecent information={{discount:"yes",discountRate:70,name:"Movile",price:2599,urlImg:"/Images/Productos/movile.png"}}/>
                </div>
            </section>
        </>
    );
}

export default SpecialOffersHome;
