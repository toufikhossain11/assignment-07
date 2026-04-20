import React from 'react';

const cardHolder = (data) => {
    console.log(data)
}

const FriendsList = ({ data }) => {
    // console.log(data)

    return (
        <div onClick={()=>cardHolder(data)} className="grid justify-center  ">
            <div className="rounded-2xl bg-base-100 shadow p-4 text-center  w-53 cursor-pointer">
                <img
                    src="https://i.pravatar.cc/100?img=1"
                    className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="font-semibold mt-2">{data.name}</h3>
                <p className="text-sm text-gray-400">62d ago</p>
                <div className='flex justify-center items-center gap-2'>
                    <div className=" rounded-2xl bg-[#CBFADB] mt-2 px-2  text-success">{data.tags[0]}</div>

                    <div className=" rounded-2xl bg-[#FEF3C6] mt-2 px-3  text-[#BB4D00]">{data.tags[1]}</div>
                </div>
                <div className=" rounded-2xl bg-[#EF4444] mt-2 px-2 w-25 mx-auto text-[#FFFFFF]">{data.status}</div>
            </div>


        </div>
    );
};

export default FriendsList;