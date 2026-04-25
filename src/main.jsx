import { StrictMode, Suspense,  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ProfileDetails from './Comoments/PageLayout/ProfileDetailsPage/ProfileDetails';
import Root from './Comoments/Root/Root';
import HomePage from './Comoments/PageLayout/HomePage';
import TimelinePage from './Comoments/PageLayout/TimelinePage/TimelinePage';
import TimelineProvider from './context/TimelineProvider';
import StatsPage from './Comoments/PageLayout/StatsPage/StatsPage';
import NotFound from './Comoments/PageLayout/NotFound';
const friendsDatas =fetch('./friends.json').then(res => res.json());

const router = createBrowserRouter([
  
  {
    
    path: "/",
    element:
      <Root></Root>,
    children:[
      {index:true,element:<Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center items-center"></span>}><HomePage friendsDatas={friendsDatas}></HomePage></Suspense>},
      {path:'/:id',element:<Suspense fallback={<span className="loading loading-spinner loading-xl text-center"></span>}><ProfileDetails friendsDatas={friendsDatas} ></ProfileDetails></Suspense>},
      {path:'timelinepage',element:<TimelinePage></TimelinePage>},
      {path:'statspage',element:<StatsPage></StatsPage>}
    ],
    errorElement:<NotFound></NotFound>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
