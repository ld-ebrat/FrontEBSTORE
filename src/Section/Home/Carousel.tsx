import React, { useState } from 'react';
import CarouselInformation from '../../Components/CarouselInformation';

const Carousel: React.FC = () => {
    const [valueMove, setValueMove] = useState<number>(0)
    const [move, setMove] = useState<string>("translate-x-[-0%]")
    const [color, setColor] = useState<string>("bg-green-300")
    const colorWithMove: Record<number,string> ={
        0:"bg-green-300",
        100:"bg-yellow-200",
        200:"bg-blue-300"
    }
    const valueTranslate:Record<number,string> ={
        0:"translate-x-0%",
        100:"translate-x-100%",
        200:"translate-x-200%"
    }

    const handleValueMoveCarousel = (value: number, operation: string): void => {
        setValueMove(prev =>{
            let newVal = prev

            if(valueMove<200 && operation === "+"){
                newVal += value
            }else{
                if(operation ==="-" && valueMove>0){
                    newVal-= value
                }
            }
            setMove(valueTranslate[newVal])
            setColor(colorWithMove[newVal])
            return newVal
        })
    }
    const handleValueMoveCarouselButton = (moveButton: number): void => {
        setMove(valueTranslate[moveButton])
        setValueMove(moveButton)
        setColor(colorWithMove[moveButton])
    }
    return (
        <>
            <div className='pt-32 w-full h-[70%] flex justify-center'>
                <div className={`${color} w-[80%] h-full flex flex-col transition-all ease-in-out duration-150`}>
                    <div className='h-full w-full flex justify-between px-10'>
                        <div>
                            <button className='h-full text-7xl' onClick={() => handleValueMoveCarousel(100, "-")}>{"<"}</button>
                        </div>
                        <div className={`relative overflow-hidden max-h-[370px] min-h-[370px] w-[70%] h-full flex justify-start py-20`}>
                            <div className={`flex absolute w-full ${move} transition-all duration-150 ease-in-out`}>
                                <CarouselInformation information={{ urlImg: "/Images/Productos/headphone-6.webp", name: "POCO X3 MAX", discount: "yes", discountRate: 85, price: 4900 }} />
                                <CarouselInformation information={{ urlImg: "/Images/Productos/laptop-4.2.webp", name: "POCO X3 MAX", discount: "yes", discountRate: 85, price: 4900 }} />
                                <CarouselInformation information={{ urlImg: "/Images/Productos/movile-4.webp", name: "POCO X3 MAX", discount: "yes", discountRate: 85, price: 2999 }} />
                            </div>
                        </div>
                        <div>
                            <button className='h-full text-7xl' onClick={() => handleValueMoveCarousel(100, "+")}>{">"}</button>
                        </div>
                    </div>
                    <div className='w-full h-full py-5'>
                        <div className='flex w-full justify-center gap-4'>
                            <button className='w-4 h-4 border-2 border-gray-700 hover:bg-gray-700' onClick={() => handleValueMoveCarouselButton(0)}></button>
                            <button className='w-4 h-4 border-2 border-gray-700 hover:bg-gray-700' onClick={() => handleValueMoveCarouselButton(100)}></button>
                            <button className='w-4 h-4 border-2 border-gray-700 hover:bg-gray-700' onClick={() => handleValueMoveCarouselButton(200)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
