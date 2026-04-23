import React from 'react';
import { Link } from 'react-router';

const FriendsList = ({ data }) => {
    // console.log(data)

    return (
        <Link to={`/${data.id}`} className="grid justify-center  ">
            <div className="rounded-2xl bg-base-100 shadow p-4 text-center  w-53 lg:w-58 cursor-pointer">
                <img
                    src={data.picture}
                    className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="font-semibold mt-2">{data.name}</h3>
                <p className="text-sm text-gray-400">62d ago</p>
                <div className='flex justify-center items-center gap-2'>
                    <div className=" rounded-2xl bg-[#CBFADB] mt-2 px-2  text-success">{data.tags[0]}</div>

                    <div className=" rounded-2xl bg-[#FEF3C6] mt-2 px-3  text-[#BB4D00]">{data.tags[1]}</div>
                </div>
                <div
                    className={`rounded-2xl mt-2 px-2 w-25 mx-auto text-white ${data.status === "on-track"? "bg-[#244D3F]": data.status === "overdue"? "bg-[#EF4444]": data.status === "almost due"? "bg-[#EFAD44]": "bg-gray-400"
                        }`}
                >
                    {data.status}
                </div>
            </div>


        </Link>
    );
};

export default FriendsList;