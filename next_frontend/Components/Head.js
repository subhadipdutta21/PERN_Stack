const { Header, Sider, Content, Footer } = AntLayout;
import { BellFilled, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Layout as AntLayout, Menu } from 'antd';
import Cookies from 'js-cookie';
import styles from './styles/commonStyles.module.css';
import Router from "next/router";

const Head = () => {

    const logout = _ => {
        Cookies.remove('jwt')
        Cookies.remove('user')
        Cookies.remove('email')
        Cookies.remove('picture')
        Cookies.remove('user_id')
        Router.push('/login')
    }

    const userMenu = (
        <Menu>
            <Menu.Item onClick={() => logout()} > {"Logout"}</Menu.Item>
        </Menu>
    );

    return (
        <Header className={styles.header}>
            <div className={styles.userPanel}>
                <Badge count={10} className={styles.badge}>
                    <BellFilled className={styles.bell} />
                </Badge>

                <Dropdown overlay={userMenu}>
                    <div className={styles.user}>
                        <UserOutlined /> &nbsp;&nbsp;
                        <p>{"Hi"}, {Cookies.get('user')}</p> &nbsp;&nbsp;
                        <DownOutlined />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
}

export default Head;