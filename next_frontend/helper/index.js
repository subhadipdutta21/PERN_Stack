import Cookies from 'js-cookie';
import SetCookie from 'set-cookie-parser';
import Router from 'next/router';

export const checkIfLoggedIn = ctx => {
    console.log('ctx-----------', ctx.req.url)
    let { res, req } = ctx
    const isServer = (typeof window === 'undefined') //check if its client or server
    let user
    if (isServer) {
        user = SetCookie.parse(ctx.req.headers.cookie)?.[0]?.jwt
    } else user = Cookies.get('jwt')
    console.log('user--', user)

    if (user) {
        if (req.url === '/' || req.url === '/login') {
            isServer ? (res.writeHead(302, { 'Location': '/home' }), res.end()) : Router.push('/home')
        }
    } else {
        if (req.url === '/home') {
            isServer ? (res.writeHead(302, { 'Location': '/' }), res.end()) : Router.push('/')
        }
    }
}