import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeLineContext } from '../../../context/TimelineContext';

const StatsPage = () => {
    const { timeLineData } = useContext(TimeLineContext);
    const { textData } = useContext(TimeLineContext);
    const { videoData } = useContext(TimeLineContext);
    const data = [
        { name: 'Text', value: timeLineData.length, fill: '#7E35E1' },
        { name: 'Call', value: textData.length, fill: '#244D3F' },
        { name: 'Video', value: videoData.length, fill: '#37A163' },

    ]
    return (
        <div>
            {timeLineData.length === 0 && textData.length === 0 && videoData.length === 0 ? <div className='max-w-3xl h-60 mx-auto shadow border-gray-400 m-5 flex justify-center items-center'><p className="text-[#244D3F] font-bold text-2xl  ">No Stats Data Found</p></div> : <div className="px-6 py-10">

                <h1 className="text-3xl  font-bold mb-6 max-w-4xl mx-auto ">Friendship Analytics</h1>

                <div className="bg-base-100 p-8 rounded-lg shadow max-w-4xl mx-auto text-center">

                    <p className="text-xl text-[#244D3F] mb-6 text-left">
                        By Interaction Type
                    </p>

                    <div className='mx-auto'>
                        <PieChart style={{ width: '100%', maxWidth: '250px', maxHeight: '70vh', aspectRatio: 1, margin: 'auto' }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"

                                cornerRadius="5%"
                                fill="#8884d8"
                                paddingAngle={4}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend></Legend>
                            <Tooltip />
                        </PieChart>
                    </div>


                </div>
            </div>}
        </div>

    );
};

export default StatsPage;