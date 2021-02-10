import "../styles/globals.css";
import { ConfigProvider } from "antd";
import Layout from "../Components/Layout";
import "antd/dist/antd.css";
import { withRouter } from "next/router";
import Cookies from "js-cookie";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apolloGqlClient";

function MyApp({ Component, pageProps }) {
  if (Cookies.get("jwt")) {
    return (
      <ApolloProvider client={client}>
        <ConfigProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConfigProvider>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <ConfigProvider>
          <Component {...pageProps} />
        </ConfigProvider>
      </ApolloProvider>
    );
  }
}

export default withRouter(MyApp);
