import React, { useState } from 'react';
import { TimeLineContext } from './TimelineContext';

const TimelineProvider = ({children}) => {
    const [timeLineData, setTimeLineData]=useState([])
        const data ={
            timeLineData, setTimeLineData
        }


    return (
        <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
    );
};

export default TimelineProvider;