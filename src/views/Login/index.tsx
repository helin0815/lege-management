import {useEffect, useState} from "react";
import styles from "./login.module.scss"
import initLoginBg from "@/views/Login/init.ts";
import {Button, Input, Space} from 'antd';
import "./login.less";

const view = () => {
    // 加载完这个组件后加载背景
    useEffect(() => {
        initLoginBg()
        window.onresize = function () {
            initLoginBg()
        }
    }, []);
    const [usernameVal, setUsernameVal] = useState("")
    const [passwordVal, setUsernamePass] = useState("")
    const [captchaVal, setCaptchaVal] = useState("")
    const usernameChange = (e) => {
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e) => {
        setUsernamePass(e.target.value)
    }
    const captchaChange = (e) => {
        setCaptchaVal(e.target.value)
    }
    const goToLogin=()=>{
        console.log("用户名密码验证码:", usernameVal,passwordVal,captchaVal)
    }
    // 点击按钮
    return (
        <div className={styles.loginPage}>
            {/*存放背景*/}
            <canvas id="canvas" style={{display: "block"}}></canvas>
            {/*登录盒子*/}
            <div className={styles.loginBox + " loginbox"}>
                <div className={styles.title}>
                    {/*标题部分*/}
                    <h1>通用后台系统</h1>
                    <p>Learning React</p>
                </div>
                {/*表单部分*/}
                <div className="form">
                    <Space direction="vertical" size="small" style={{display: 'flex'}}>
                        <Input placeholder="username" onChange={usernameChange}/>
                        <Input.Password placeholder="password" onChange={passwordChange}/>
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaChange}/>
                            <div className="captchaImg">
                                <img height="29" src="./img.png" alt=""/>
                            </div>
                        </div>
                        <Button type="primary" block className="loginBtn" onClick={goToLogin}>
                            登录
                        </Button>
                    </Space>
                </div>
            </div>

        </div>
    )
}

export default view
