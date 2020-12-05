import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { client } from '../apolloGqlClient';
import { oAuthentication } from '../gqlQueries';
import styles from '../Components/styles/commonStyles.module.css'
import Cookies from 'js-cookie';
import { Form, Input, Button, Checkbox, Card, message, Row } from 'antd';
import commonStyles from '../Components/styles/commonStyles';
import Router from "next/router";
import { checkIfLoggedIn } from '../helper';

const layout = {
    labelCol: { span: 8, }, wrapperCol: { span: 16, },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16, },
};
const tailLayout2 = {
    wrapperCol: { offset: 8, span: 16, },
};

const Login = () => {

    const [disabled, setDisabled] = useState(false)

    const onSuccess = async resp => {
        setDisabled(true)
        console.log(resp)
        let token = resp.getAuthResponse().id_token
        try {
            let res = await client.query({ query: oAuthentication, variables: { input: { token } }, fetchPolicy: 'no-cache' })
            console.log(res)
            res?.data?.oAuth?.error ?
                message.error(res.data.oAuth.message) :
                (
                    message.success(res.data.oAuth.message),
                    Cookies.set('jwt', res.data.oAuth.token),
                    Cookies.set('user', res.data.oAuth.name),
                    Cookies.set('email', res.data.oAuth.email),
                    Cookies.set('picture', res.data.oAuth.picture),
                    Cookies.set('user_id', res.data.oAuth.user_id),
                    Router.push('/home')
                )
        }
        catch (error) { message.error(error); setDisabled(false) }        

    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify='center' align='middle'>
            <div style={commonStyles.loginContainer}>
                <Card style={commonStyles.loginCard}>
                    <Form
                        name="basic" initialValues={{ remember: true, }}
                        onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout}
                    >
                        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>

                        <Form.Item {...tailLayout2} className={styles.oauthBtn}>
                            <GoogleLogin
                                clientId={process.env.OAUTH_CLIENT_ID}
                                buttonText="Login/ Signup using Google" onSuccess={onSuccess}
                                onFailure={err => console.log(err)} cookiePolicy={'single_host_origin'} theme='dark'
                                disabled={disabled}
                            />
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </Row>
    );
}


export async function getServerSideProps(ctx) {
    checkIfLoggedIn(ctx);
    return {
        props: {}
    }
}


export default Login;