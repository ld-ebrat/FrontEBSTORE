import React from 'react';
import InputInformation from '../../Components/InputInformation';

const PersonalInformation: React.FC = () => {
    return (
        <>
            <h3 className='font-bold px-20 text-lg'>Personal Information</h3>
            <div className='w-full px-20 flex flex-col gap-6 pt-5'>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "Leiner Ebrat", typeInput: "text", infoLabel: "First Name" }} />
                    <InputInformation information={{ content: "Leiner Ebrat", typeInput: "text", infoLabel: "Last Name" }} />
                </div>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "thewifi.377@gmail.com", typeInput: "email", infoLabel: "Email" }} />
                    <InputInformation information={{ content: "3016251907", typeInput: "number", infoLabel: "Phone" }} />
                </div>
                <div className='flex w-full gap-20'>
                    <InputInformation information={{ content: "Masculino", typeInput: "text", infoLabel: "Gender" }} />
                    <InputInformation information={{ content: "2001-07-29", typeInput: "date", infoLabel: "Birthdate" }} />
                </div>
                <div>
                    <button className='bg-gen text-white p-2 rounded-lg'>SAVE CHANGE</button>
                </div>
            </div>
        </>
    );
}

export default PersonalInformation;
