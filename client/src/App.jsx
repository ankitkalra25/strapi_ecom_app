import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// import './App.css'
import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ]
  }
])
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
