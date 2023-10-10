import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';

import Events from './Pages/Events.jsx';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login';
import Home from './Pages/Footer/Home/Home';
import Register from './Components/Register';
import AuthProvider from './firebase/AuthProvider';
import ServiceDetails from './Pages/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute';
import Error from './Components/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
{
  path:"/",
  element:<Home></Home>,
  loader:()=> fetch("./../public/data.json"),
},
{
path:"/serviceDetails/:id",
element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
},
{
  path:"/events",
  element:<PrivateRoute><Events></Events></PrivateRoute>,
},
{
  path:"/blogs",
  element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
},

{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/register",
  element:<Register></Register>
}




  ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
