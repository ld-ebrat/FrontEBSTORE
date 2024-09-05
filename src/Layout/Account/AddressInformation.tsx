import React from 'react';
import InputInformation from '../../Components/InputInformation';

const AddressInformation: React.FC = () => {
    return (
        <>
            <h3 className='font-bold px-20 text-lg'>Address</h3>
            <div className='w-full px-20 flex flex-col gap-6 pt-5'>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "Leiner Ebrat", typeInput: "text", infoLabel: "First Name" }} />
                    <InputInformation information={{ content: "", typeInput: "phone", infoLabel: "Phone" }} />
                </div>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "Colombia", typeInput: "text", infoLabel: "Country" }} />
                    <InputInformation information={{ content: "Cesar", typeInput: "text", infoLabel: "State" }} />
                </div>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "Valledupar", typeInput: "text", infoLabel: "City" }} />
                    <InputInformation information={{ content: "200001", typeInput: "number", infoLabel: "Postal Code" }} />
                </div>
                <div>
                    <InputInformation information={{ content: "Mz 14 Casa 7 Barrio Mareigua", typeInput: "text", infoLabel: "Address" }} />
                </div>
                <div>
                    <button className='bg-gen text-white p-2 rounded-lg'>SAVE CHANGE</button>
                </div>
            </div>
        </>
    );
}

export default AddressInformation;
