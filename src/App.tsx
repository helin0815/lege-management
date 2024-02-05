import {useState} from 'react'
import Comp1 from "@/components/Comp1";
import Comp2 from "@/components/Comp2";
import {Button} from "antd"
// import "antd/dist/antd.css"; //全部组件的样式都引入了，不可行
import {UpCircleOutlined} from "@ant-design/icons"
import {useRoutes,Link} from "react-router-dom"
import Router from "@/router";
function App() {
    const [count, setCount] = useState(0)
    const  outlet = useRoutes(Router)

    return (
        <div className="App">
            {/*顶级组件*/}
            {/*<Comp1></Comp1>*/}
            {/*<Comp2></Comp2>*/}
            {/*<Button type="primary">按钮一下</Button>*/}
            {/*<UpCircleOutlined style={{fontSize: '30px', color: 'red'}}/>*/}
            {/*配置一个重定向*/}
            {/*<Link to="/home">Home</Link> |*/}
            {/*<Link to="/about">Aboaaut</Link>*/}
            {/*/!*<Outlet></Outlet>*!/*/}
            {outlet}

        </div>
    )
}

export default App
