import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { useEffect, useState } from 'react';
import { GraphinContext } from '@antv/graphin';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),

        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];

const NavMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { graph } = React.useContext(GraphinContext);
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e.key);
        if (e.key == "9"){
            console.log("YES! ")
            
        }
      };

      useEffect(() => {
        //graph.render()
        console.log("meow")
    }, [onClick])
    return (
        <>
            <div className="logo" />
            <Menu
                onClick={onClick}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            />
        </>

    );
};

export default NavMenu;