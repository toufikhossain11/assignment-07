import React, { useContext } from 'react';
import { TimeLineContext } from '../../../context/TimelineContext';

const TimelinePage = () => {
    const { timeLineData } = useContext(TimeLineContext)

    const { textData } = useContext(TimeLineContext);
    const { videoData } = useContext(TimeLineContext);

    return (
        <div>
            {timeLineData.length === 0 && textData.length === 0 && videoData.length === 0 ? <div className='max-w-3xl h-60 mx-auto shadow border-gray-400 m-5 flex justify-center items-center'><p className="text-[#244D3F] font-bold text-2xl  ">No Timeline Data Found</p></div>
                
             : <div className="px-6 py-10 max-w-3xl mx-auto">

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
                    timeLineData.map((data, ind) => {
                        return <div key={ind} className="space-b-4">
                            <div className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow m-3">
                                <span className="text-xl">📞</span>
                                <div>
                                    <p className="font-bold text-[#244D3F]">
                                        Call <span className="text-gray-500">{data.name}</span>
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {new Date().toLocaleDateString("en-US")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    })
                }

                {textData.map((data, ind) => {
                    return <div key={ind} className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow m-3">
                        <span className="text-xl">💬</span>
                        <div>
                            <p className="font-bold text-[#244D3F]">
                                Text <span className="text-gray-500">{data.name}</span>
                            </p>
                            <p className="text-sm text-gray-400">{new Date().toLocaleDateString("en-US")}</p>
                        </div>
                    </div>
                })}
                {videoData.map((data, ind) => {
                    return <div key={ind} className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow m-3">
                        <span className="text-xl">🎥</span>
                        <div>
                            <p className="font-bold text-[#244D3F]">
                                Video <span className="text-gray-500">{data.name}</span>
                            </p>
                            <p className="text-sm text-gray-400">{new Date().toLocaleDateString("en-US")}</p>
                        </div>
                    </div>
                })}

            </div>}
        </div>

    );
};

export default TimelinePage;