import '../styles/globals.css'
import { ConfigProvider } from 'antd';
import Layout from '../Components/Layout';
import 'antd/dist/antd.css';
import { withRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  return <ConfigProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>
}

export default withRouter(MyApp)
