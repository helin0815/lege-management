import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import "@/assets/styles/global.scss"
import App from "@/App.tsx";
import {BrowserRouter} from "react-router-dom"
// import App from './App.tsx'
// import Router from "./router";
import store from "@/store";
// 项目管理
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    // </React.StrictMode>,
    // 下面的store={store}将项目关联起来
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </Provider>
)
