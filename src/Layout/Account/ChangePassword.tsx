import React from 'react';
import InputInformation from '../../Components/InputInformation';

const ChangePassword: React.FC = () => {
    return (
        <>
            <h3 className='font-bold px-20 text-lg'>Personal Information</h3>
            <div className='w-full px-20 flex flex-col gap-6 pt-5'>
                <div className='flex flex-col w-1/2 gap-5'>
                    <InputInformation information={{ content: "", typeInput: "text", infoLabel: "Old Password" }} />
                    <InputInformation information={{ content: "", typeInput: "text", infoLabel: "New Password" }} />
                    <InputInformation information={{ content: "", typeInput: "text", infoLabel: "Repet New Password" }} />
                    <InputInformation information={{ content: "", typeInput: "text", infoLabel: "Code" }} />
                </div>
                <div>
                    <button className='bg-gen text-white p-2 rounded-lg'>SAVE CHANGE</button>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
