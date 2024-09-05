import React from 'react';

interface Props {
    information: string
}
const TextSubtitle: React.FC<Props> = ({information}) => {
    return (
        <>
            <div className=' py-5'>
                <span className='text-3xl text-[#6527BE] font-black'>{information}</span>
            </div>
        </>
    );
}

export default TextSubtitle;
