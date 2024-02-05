import App from "../App.tsx"
import Home from "@/views/Home.tsx";
import About from "@/views/About.tsx";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
// 组件形式的写法
const baseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Navigate to="/home"/>}></Route>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const baseRouterSimple = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
