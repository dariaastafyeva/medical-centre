import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "./style.scss"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from './pages/About';
import Employees from './pages/Employees';
import EmployeeProfile from './pages/EmployeeProfile';
import Services from './pages/Services';
import Feedback from './pages/Feedback';
import Articles from './pages/Articles';
import ArticleProfile from './pages/ArticleProfile';
import ServicesDetail from './pages/ServicesDetail';
import { useLayoutEffect } from 'react';
import Appointment from './pages/Appointment';



const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop smooth />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/employees",
        children: [
          {
            index: true,
            element: <Employees />,
          },
          {
            path: "/employees/:id",
            element: <EmployeeProfile />
          }
        ]
      },
      {
        path: "/articles",
        children: [
          {
            index: true,
            element: <Articles />,
          },
          {
            path: "/articles/:id",
            element: <ArticleProfile />
          }
        ]
      },
      {
        path: "/services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: "/services/:id",
            element: <ServicesDetail />
          }
        ]
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },

    ]
  },
]);


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;