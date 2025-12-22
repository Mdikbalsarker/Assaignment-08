import { createBrowserRouter } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import { Component } from "react";
import Home from "../Home/Home";
import Installation from "../Installation/Installation";

export  const router=createBrowserRouter(
  
    [
        {
            path:'/',
            Component:Root,
            errorElement: <ErrorPage></ErrorPage>,
            //  children must be in a array           
            children:[{
            index:true,
            path:'/home',
            loader:()=>fetch('bookList.json'),
            Component:Home
            }
        ,
        {
            path:"/installation",
            loader:()=>fetch('bookList.json'),
            Component:Installation
        }
    ]
        }
    ]
)