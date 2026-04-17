import React from 'react';

const FriendsList = ({data}) => {
    console.log(data)
    return (
        <div className="px-6 py-10">
            EF4444

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="card bg-base-100 shadow p-4 text-center">
                    <img
                        src="https://i.pravatar.cc/100?img=1"
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                    <h3 className="font-semibold mt-2">David Kim</h3>
                    <p className="text-sm text-gray-400">62d ago</p>
                    <div className='flex justify-center items-center gap-2'>
                    <div className=" rounded-2xl bg-[#CBFADB] mt-2 px-2  text-success">Active</div>

                    <div className=" rounded-2xl bg-[#FEF3C6] mt-2 px-2  text-[#BB4D00]">Active</div>
                    </div>
                     <div className=" rounded-2xl bg-[#EF4444] mt-2 px-2 w-20 mx-auto text-[#FFFFFF]">Overdue</div>
                </div>
            </div>
        </div>
    );
};

export default FriendsList;