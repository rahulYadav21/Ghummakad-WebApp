import {useState} from "react";
import './App.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Navbar from './assets/components/navbar/navbar.components';
import Home from './assets/components/home/home.components';
import About from './assets/components/about/about.components';
import Destination from './assets/components/destination/destination.components';
import Tour from './assets/components/tour/tour.components';
import ContactUs from './assets/components/contactUs/contactUs.components';
import SignUp from './assets/components/signInSignUp/signUp.components';
import SignIn from './assets/components/signInSignUp/signIn.components';
import SignInDashboard from './assets/components/signInSignUp/signInDashboard/signInDashboard.components';

export default function App() {

  const [data,setData] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />
        },        
        {
          path: "/destination",
          element: <Destination />
        },
        {
          path: "/tour",
          element: <Tour />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contactUs",
          element: <ContactUs />
        },
        {
          path: "/signIn",
          element: <SignIn data={setData} />,
          // children: [
          //   {
          //     path: "/signInDashboard",
          //     element: <SignInDashboard />,
          //   }
          // ]
        },
        {
          path: "/signInDashboard",
          element: <SignInDashboard data={data}/>
        },
        {
          path: "/signUp",
          element: <SignUp />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
