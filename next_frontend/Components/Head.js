const { Header, Sider, Content, Footer } = AntLayout;
import { BellFilled, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Layout as AntLayout, Menu, Spin, Avatar, Drawer, Skeleton } from 'antd';
import Cookies from 'js-cookie';
import styles from './styles/commonStyles.module.css';
import Router from "next/router";
import { client } from '../apolloGqlClient';
import { FETCH_NOTIFICATION_LIST } from '../gqlQueries';
import { Fragment, useState } from 'react';
import moment from 'moment'

const Head = () => {

    const [notificationListData, setNotificationListData] = useState([])
    const [showNotificationPanel, setShowNotificationPanel] = useState(false)
    const [showDropdwn, setShowDropdwn] = useState(false)

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
            <Menu.Item onClick={() => console.log('open prf')} > {"Profile"} </Menu.Item>
            <Menu.Item onClick={() => logout()} > {"Logout"} </Menu.Item>
        </Menu>
    );

    const fetchNotificationList = async _ => {
        try {
            let resp = await client.query({
                query: FETCH_NOTIFICATION_LIST, fetchPolicy: 'no-cache', variables: {
                    input: {
                        name: Cookies.get('user'),
                        limit: 5,
                        offset: 0
                    }
                }
            })
            resp?.data?.fetchNotificationList ? (setNotificationListData(resp.data.fetchNotificationList), setShowDropdwn(true)) : null
        } catch (error) { console.log(error) }
    }

    const notificationList = (
        <Menu>
            {
                notificationListData?.map((notific, idx) => (
                    <Fragment key={idx}>
                        <Menu.Item key={idx}>
                            <div>
                                <Avatar src={notific.tagger_dp} />
                                {" " + notific.tagger_name + " has tagged you in a post"}
                                <div style={{ textAlign: 'end', fontSize: 10 }}>
                                    {moment.unix((notific.created_at).substr(0, notific.created_at.length - 3)).format('llll')}
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Divider />
                        <div style={{ textAlign: 'center' }}>
                            {idx === notificationListData.length - 1 &&
                                <a onClick={_ => { setShowDropdwn(false); setShowNotificationPanel(true) }}> Show All</a>
                            }
                        </div>
                    </Fragment>
                ))
            }
        </Menu>
    );

    return (
        <Header className={styles.header}>
            <div className={styles.userPanel}>
                <Dropdown overlay={notificationList} visible={showDropdwn} placement='bottomCenter' onClick={_ => fetchNotificationList()}>
                    <Badge count={10} className={styles.badge}>
                        <BellFilled className={styles.bell} />
                    </Badge>
                </Dropdown>

                <Dropdown overlay={userMenu}>
                    <div className={styles.user}>
                        <UserOutlined /> &nbsp;&nbsp;
                        <p>{"Hi"}, {Cookies.get('user')}</p> &nbsp;&nbsp;
                        <DownOutlined />
                    </div>
                </Dropdown>
                <Drawer
                    title="Notifications"
                    placement={'right'}
                    closable={false}
                    onClose={() => setShowNotificationPanel(false)}
                    visible={showNotificationPanel}
                    key={'right'}
                    width={'400px'}
                >
                    {[1, 2, 3, 4, 5].map((itm, idx) => <Skeleton key={idx} active />)}

                </Drawer>
            </div>
        </Header>
    );
}
export default Head;