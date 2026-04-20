import { StrictMode, Suspense, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ProfileDetails from './Comoments/PageLayout/ProfileDetailsPage/ProfileDetails';
import Root from './Comoments/Root/Root';
import HomePage from './Comoments/PageLayout/HomePage';
const friendsDatas =fetch('/public/friends.json').then(res => res.json());
// console.log(detailsData)
// const [detailsData, setDetailsData]=useState([]) ;
const router = createBrowserRouter([
  
  {
    
    path: "/",
    element:
      <Root friendsDatas={friendsDatas}></Root>,
    children:[
      {index:true,element:<HomePage friendsDatas={friendsDatas}></HomePage>},
      {path:'profileDetals',element:<ProfileDetails  ></ProfileDetails>}
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
