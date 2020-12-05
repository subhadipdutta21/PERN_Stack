import '../styles/globals.css'
import { ConfigProvider } from 'antd';
import Layout from '../Components/Layout';
import 'antd/dist/antd.css';
import { withRouter } from 'next/router'
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {

  if (Cookies.get('jwt')) {
    return <ConfigProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  } else {
    return <ConfigProvider>      
        <Component {...pageProps} />      
    </ConfigProvider>
  }
}

export default withRouter(MyApp)
