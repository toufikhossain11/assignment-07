import React, { useContext } from 'react';
import { TimeLineContext } from '../../../context/TimelineContext';

const TimelinePage = () => {
    const {timeLineData} = useContext(TimeLineContext)
    console.log(timeLineData)

    return (
        <div className="px-6 py-10 max-w-3xl mx-auto">

            <h1 className="text-2xl font-bold mb-6">Timeline</h1>

            <div className="mb-6">
                <select className="select select-bordered w-full max-w-xs">
                    <option>Filter timeline</option>
                    <option>All</option>
                    <option>Meetup</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </div>
            {
                timeLineData.map((data,ind)=>
                {return <div key={ind} className="space-b-4">
                <div  className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow m-3">
                    <span className="text-xl">📞</span>
                    <div>
                        <p className="font-medium">
                            Call <span className="text-gray-500">{data.name}</span>
                        </p>
                        <p className="text-sm text-gray-400">March 19, 2026</p>
                    </div>
                </div>
                </div>})
            }

            

                {/* <div className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow">
                    <span className="text-xl">🤝</span>
                    <div>
                        <p className="font-bold text-[#244D3F]">
                            Meetup <span className="text-gray-500 font-medium">with Tom Baker</span>
                        </p>
                        <p className="text-sm text-gray-400">March 29, 2026</p>
                    </div>
                </div> */}

                {/* <div className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow">
                    <span className="text-xl">💬</span>
                    <div>
                        <p className="font-medium">
                            Text <span className="text-gray-500">with Sarah Chen</span>
                        </p>
                        <p className="text-sm text-gray-400">March 28, 2026</p>
                    </div>
                </div> */}

{/* 
                <div className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow">
                    <span className="text-xl">🎥</span>
                    <div>
                        <p className="font-medium">
                            Video <span className="text-gray-500">with Aisha Patel</span>
                        </p>
                        <p className="text-sm text-gray-400">March 23, 2026</p>
                    </div>
                </div> */}
            
        </div>
    );
};

export default TimelinePage;