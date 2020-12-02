import React from 'react';
import { Layout as AntLayout } from 'antd'
import commonStyles from './styles/commonStyles';
import Header from './Header';


const Layout = props => {
    return (
        <AntLayout className="site-layout" style={commonStyles.layoutContainer}>             
            {props.children}
        </AntLayout>
    );
}

export default Layout;