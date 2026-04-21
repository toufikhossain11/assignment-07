import React, { useState } from 'react';
import { TimeLineContext } from './TimelineContext';

const TimelineProvider = ({children}) => {
    const [timeLineData, setTimeLineData]=useState([]);
    const [textData , setTextData]=useState([]);
    const [videoData , setVideoData]=useState([]);
        const data ={
            timeLineData,
            setTimeLineData,
            textData ,
            setTextData,
            videoData ,
            setVideoData
        }


    return (
        <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
    );
};

export default TimelineProvider;