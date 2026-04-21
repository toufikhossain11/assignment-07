import { StrictMode, Suspense,  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ProfileDetails from './Comoments/PageLayout/ProfileDetailsPage/ProfileDetails';
import Root from './Comoments/Root/Root';
import HomePage from './Comoments/PageLayout/HomePage';
import TimelinePage from './Comoments/PageLayout/TimelinePage/TimelinePage';
import TimelineProvider from './context/TimelineProvider';
const friendsDatas =fetch('/public/friends.json').then(res => res.json());

const router = createBrowserRouter([
  
  {
    
    path: "/",
    element:
      <Root friendsDatas={friendsDatas}></Root>,
    children:[
      {index:true,element:<HomePage friendsDatas={friendsDatas}></HomePage>},
      {path:'/:id',element:<ProfileDetails friendsDatas={friendsDatas} ></ProfileDetails>},
      {path:'timelinepage',element:<TimelinePage></TimelinePage>}
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
