// import React, { useState } from 'react';

import { use, useContext } from "react";
import { useParams } from "react-router";
import { TimeLineContext } from "../../../context/TimelineContext";

const ProfileDetails = ({friendsDatas}) => {
    const data = use(friendsDatas);

    const {id}= useParams();
    const details = data.find((d)=>d.id==id);

    const {timeLineData,setTimeLineData}=useContext(TimeLineContext)

    const handelcallbtn = ()=>{
        setTimeLineData([...timeLineData,details])
    }
    
    
    
    return (
        <div>
            <div className="flex justify-center px-4 py-10">
                <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">

                    <div className="card bg-base-100 shadow p-6 text-center">
                        <img
                            src="https://i.pravatar.cc/100?img=5"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h3 className="font-semibold text-lg mt-2"> {details.name}</h3>

                        <div className="flex justify-center gap-2 mt-2">
                            <span className="badge badge-error">{details.status}</span>
                            <span className="badge badge-success">{details.tags[0]}</span>
                        </div>

                        <p className="text-sm text-gray-400 mt-3 italic">
                            '{details.bio}'
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {details.email}
                        </p>

                        <div className="mt-6 space-y-2">
                            <button className="btn card bg-base-100 p-4 text-center shadow w-full">
                                Snooze 2 Weeks
                            </button>
                            <button className="btn card bg-base-100 p-4 text-center shadow w-full">
                                Archive
                            </button>
                            <button className="btn card bg-base-100 p-4 text-center text-error shadow w-full">
                                Delete
                            </button>
                        </div>
                    </div>

                   
                    <div className="md:col-span-2 space-y-6">

                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-2xl font-bold text-[#244D3F]">{details.days_since_contact}</h2>
                                <p className="text-sm text-gray-500">
                                    Days Since Contact
                                </p>
                            </div>

                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-2xl font-bold text-[#244D3F]">{details.goal}</h2>
                                <p className="text-sm text-gray-500">
                                    Goal (Days)
                                </p>
                            </div>

                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-xl font-bold text-[#244D3F]">{details.next_due_date}</h2>
                                <p className="text-sm text-gray-500">
                                    Next Due
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow p-5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-[#244D3F]">Relationship Goal</h3>
                                <button className="btn btn-xs">Edit</button>
                            </div>
                            <p className="text-gray-500 mt-2">
                                Connect every <span className="font-semibold">30 days</span>
                            </p>
                        </div>

                        <div className="card bg-base-100 shadow p-5">
                            <h3 className="font-bold text-[#244D3F] mb-4">Quick Check-In</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button onClick={()=>handelcallbtn(details)} className="btn card bg-base-100 p-4 text-center shadow flex flex-col h-20">
                                    📞
                                    <span>Call</span>
                                </button>

                                <button className="btn card bg-base-100 p-4 text-center shadow flex flex-col h-20">
                                    💬
                                    <span>Text</span>
                                </button>

                                <button className="btn card bg-base-100 p-4 text-center shadow flex flex-col h-20">
                                    🎥
                                    <span>Video</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;