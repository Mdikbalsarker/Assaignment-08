import { createBrowserRouter } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import { Component } from "react";
import Home from "../Home/Home";
import Installation from "../Installation/Installation";
import ProductDetails from "../Products/ProductDetails";
import ReactTab from "../ReactTab/ReactTab";


export  const router=createBrowserRouter(
  
    [
        {
            path:'/',
            Component:Root,
            errorElement: <ErrorPage></ErrorPage>,
            hydrateFallbackElement: <div className="text-center mt-10">Loading Application...</div>,         
            children:[{
            index:true,
            path:'/home',
            loader:()=>fetch('AppsList.json'),
            Component:Home
            }
        ,
        {
            path:"/app",
            loader:()=>fetch('AppsList.json'),
            Component: Installation
        },
        {
            path:'/productDetails/:id',
            loader:()=>fetch('AppsList.json'),
            Component:ProductDetails
        },
        {
            path:'/installation',
            loader:()=>fetch('AppsList.json'),
            Component: ReactTab
        }
    ]
        }
    ]
)