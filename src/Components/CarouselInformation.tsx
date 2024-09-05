import { Info } from "../types";

interface Props {
    information: Info
}

const CarouselInformation: React.FC<Props> = ({ information }) => {
    const text: string = "text-black"

    return (
        <>
            <div className='w-full h-full flex justify-between min-w-full'>
                <img src={`${information.urlImg}`} className='-rotate-12'></img>
                <div className='flex flex-col gap-7'>
                    <div className='flex justify-center items-center gap-10'>
                        <div className={`${text} flex flex-col items-center border-4 border-black rounded-full text-4xl font-normal py-7 px-6`}>
                            <span>{-information.discountRate}%</span>
                            <span>OFF</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className={`text-3xl font-bold ${text}`}>{information.name}</span>
                            <div className='flex gap-3'>
                                <span className='text-gen text-xl font-bold'>${information.price}</span>
                                <span className='line-through font-bold text-gray-500 text-xl'>${information.price - ((information.discountRate / 100) * information.price)}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[85%] flex gap-x-5'>
                        <a className='bg-[#6627be] text-white py-2 px-3 rounded-md flex gap-2 items-center justify-center hover:cursor-pointer text-sm'> <img src='/Images/carr-w-p.png' className='h-4' /> BUY PRODUCT</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CarouselInformation;
