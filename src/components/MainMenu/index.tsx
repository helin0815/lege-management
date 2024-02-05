import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Menu, theme} from "antd"
import {
    DesktopOutlined, FacebookFilled,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

// 登录请求到数据以后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: "栏目1",
        key: "/page1",
        icon: <PieChartOutlined/>,
    },
    {
        label: "栏目2",
        key: "/page2",
        icon: <DesktopOutlined/>,
    },
    {
        label: "栏目3",
        key: "/page3",
        icon: <UserOutlined/>,
        children: [
            {
                label: "栏目301",
                key: "/page3/page301",
            },
            {
                label: "栏目302",
                key: "/page3/page302",
            },
            {
                label: "栏目303",
                key: "/page3/page303",
            },
        ]
    },
    {
        label: "栏目4",
        key: "/page4",
        icon: <TeamOutlined/>,
        children: [
            {
                label: "栏目401",
                key: "/page4/page401",
            },
            {
                label: "栏目402",
                key: "/page4/page402",
            },
        ]
    },
    {
        label: "栏目5",
        key: "/page5",
        icon: <FacebookFilled/>,
    },
]
const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    console.log("currentRoute:", currentRoute.pathname)
    const menuClick = (e) => {
        console.log('click ', e.key);
        navigateTo(e.key)
    };
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    // 设置展开项的初始值,通过currentRoute.pathname跟items数组的每一项进行对比，如果找到了相等
    // 就要上一级的key赋值给openKeys做初始值
    let firstOpenKey: string = ""

    function findKey(obj) {
        return obj.key === currentRoute.pathname
    }

    // 进行对比
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]['children'].length > 1 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i].key
            break
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    const handleOpenChange = (keys) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    console.log("firstOpenKey:", firstOpenKey)
    return (
        // defaultSelectedKeys表示当前样式的选择项

        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline"
              items={items} onClick={menuClick}
              onOpenChange={handleOpenChange}
              openKeys={openKeys}
        />
    )

}

export default Comp
