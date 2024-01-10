import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Phones from './components/Phones/Phones';
import App from './App.jsx'
import PhonePage from './components/Phones/PhonePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: '/phones',
        element : <Phones></Phones>,
        loader : () => fetch('http://localhost:5000/phones')
      },
      {
        path: '/phone/:id',
        element : <PhonePage></PhonePage>,
        loader : ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
