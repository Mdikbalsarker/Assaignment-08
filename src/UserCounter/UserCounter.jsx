import React from 'react';

const UserCounter = () => {
    return (
        <div>
            <div className="h-auto bg-linear-to-bl from-violet-500 to-fuchsia-500">
                <h1 className='text-4xl justify-center text-center text-white p-7'> Trused by Millions,Built for You</h1>
            <div className='flex justify-around items-center gap-10 pb-10 '>
                <div className='text-white items-center text-center rounded-xl   '>
                    <h3 className='p-1'>Total Downloads</h3>
                    <h1 className='text-6xl '>29.6 M</h1>
                    <h3 className='p-1'>21% more than last month</h3>
                </div>
                <div className='text-white items-center text-center rounded-xl  '>
                    <h3 className='p-1'>Total Downloads</h3>
                    <h1 className='text-6xl '>29.6 M</h1>
                    <h3 className='p-1'>21% more than last month</h3>
                </div>
                 <div className='text-white items-center text-center rounded-xl  '>
                    <h3 className='p-1'>Total Downloads</h3>
                    <h1 className='text-6xl '>29.6 M</h1>
                    <h3 className='p-1'>21% more than last month</h3>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserCounter;