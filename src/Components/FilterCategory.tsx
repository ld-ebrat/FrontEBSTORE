import { FC } from 'react';

interface Props {
    nameFilter: string,
    filters: string
}

const FilterCategory: FC<Props> = ({ nameFilter, filters }) => {
    return (
        <>
            <div className='border-dotted border-t-2 border-black py-4'>
                <div className='flex flex-col gap-3 px-3 py-2'>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>{nameFilter}</span>
                        <span className='rotate-180'>^</span>
                    </div>
                    
                    <div>
                        <div>
                            <div className='flex gap-2'>
                                <label className='flex gap-2'>
                                    <input type='checkbox' id={filters}></input>
                                    {filters}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterCategory;
