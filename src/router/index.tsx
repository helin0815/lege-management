import React, {lazy} from "react"
import Home from "@/views/Home.tsx";
import About from "@/views/About.tsx";
import {Navigate} from "react-router-dom"
import Page1 from "@/views/Page1.tsx";
import Page2 from "@/views/Page2.tsx";
import Page301 from "@/views/Page301.tsx";
import Login from "@/views/Login";
// import User from "@/views/User.tsx"; // Navigate重定向
const User = lazy(() => import("@/views/User.tsx")) // 懒加载
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
);
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1"/>
    },
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1/>)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2/>)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301/>)
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    // 未知路由重定向回到首页
    {
        path: "*",
        element: withLoadingComponent(<Page1/>)
    }
]
export default routes
