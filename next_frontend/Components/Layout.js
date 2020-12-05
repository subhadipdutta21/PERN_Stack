import { Layout as AntLayout } from 'antd';
import React from 'react';
import Head from './Head';
import commonStyles from './styles/commonStyles';
import styles from './styles/commonStyles.module.css';
const { Sider, Content, Footer } = AntLayout;


const Layout = props => {    

    return (
        <AntLayout className={styles.layout}>
            <Head/>
            <AntLayout className="site-layout" style={commonStyles.layoutContainer}>
                <Content>
                    {props.children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
}

export default Layout;