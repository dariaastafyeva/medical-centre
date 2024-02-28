import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import "./style.scss"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from './pages/About';
import Employees from './pages/Employees';
import EmployeeProfile from './pages/EmployeeProfile';
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
    ]
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
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