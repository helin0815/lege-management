import React, {useState} from 'react';

import {Breadcrumb, Layout} from 'antd';
import {Outlet} from "react-router-dom"
import MainMenu from "@/components/MainMenu";
const {Header, Content, Footer, Sider} = Layout;


const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh', color: "green", background: "green",}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <MainMenu></MainMenu>
            </Sider>
            <Layout>
                <Header style={{padding: 10, background: "white", color: "red"}}>
                    <Breadcrumb style={{lineHeight: '40px', background: "white",}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{margin: '16px 16px 0', color: "red"}}>
                    <Outlet/>
                </Content>
                <Footer style={{textAlign: 'center', padding: 0, lineHeight: '40px'}}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default View;
