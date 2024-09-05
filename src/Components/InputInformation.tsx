import React, { useState } from 'react';
import { InfoInput } from '../types';

interface Props {
    information: InfoInput
}
const InputInformation: React.FC<Props> = ({ information }) => {
    const [value,setValue] = useState<string>(information.content)
    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return (
        <>
            <div className='flex flex-col w-full'>
                <label>{information.infoLabel}</label>
                <input type={`${information.typeInput}`} value={value} className='border border-gray-300 rounded-lg py-2 px-2' onChange={handleChangeEvent}></input>
            </div>
        </>
    );
}

export default InputInformation;
