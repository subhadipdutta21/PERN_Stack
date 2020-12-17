import { Button, message, Input, Avatar, Modal, Spin, Mentions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import commonStyles from './styles/commonStyles';
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';
import { debounce } from "lodash";

import { client } from '../apolloGqlClient';
import { create_post, fetch_mentions } from '../gqlQueries';
const { Option, getMentions } = Mentions;


const { TextArea } = Input;


const CreatePost = ({ setReload, reload }) => {
    const [username, setusername] = useState('');
    const [picture, setpicture] = useState('');

    const dummyDp = <Avatar style={commonStyles.bgGreen} icon={<UserOutlined />} />

    const [postDesc, setPostDesc] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const [mentionList, setMentionList] = useState([])

    useEffect(async () => {
        const username = await Cookies.get('user');
        const picture = await Cookies.get('picture')
        setusername(username); setpicture(picture);
    }, []);

    // create post
    const createPost = async _ => {
        console.log('cretaing post--', Cookies.get('user_id'), postDesc)
        if (!postDesc) { message.error('Nothing to Post!'); return }
        console.log(postDesc, mentionList)
        // return
        setLoading(true)
        try {
            let resp = await client.mutate({
                mutation: create_post, fetchPolicy: 'no-cache', variables: {
                    input: {
                        body: postDesc,
                        user_id: Cookies.get('user_id'),
                        mentions: mentionList
                    }
                }
            })

            console.log(resp)
            resp?.data?.createPost?.error ?
                message.error(resp?.data?.createPost?.message) :
                (setShow(false), message.success(resp?.data?.createPost?.message), setReload(!reload))
        }
        catch (error) { console.log(error); message.error(error) }
        finally { setLoading(false) }
    }


    const getSuggestions = async val => {
        let resp = await client.query({ query: fetch_mentions, fetchPolicy: 'no-cache', variables: { input: { searchTerm: val } } })
        console.log(resp)
        resp?.data?.mentions?.error ? message.error(resp?.data?.mentions?.message) : setSuggestions(resp?.data?.mentions?.suggestions)
    }

    const createPostModal = () => (
        <Modal
            title="Create Post" okText='Post'
            visible={show} closable={false}
            onOk={() => createPost()}
            onCancel={() => { setShow(false); setPostDesc('') }}
        >
            <Spin spinning={loading}>
                {console.log(postDesc, mentionList)}
                <Mentions
                    rows="5" placeholder={"Whats on your mind, " + username?.split(' ')?.[0] + " ?"}
                    value={postDesc} autoFocus={true}
                    onChange={val => setPostDesc(val)}
                    onSearch={debounce((val) => getSuggestions(val), 1000)}
                    onSelect={({ value }) => setMentionList([...mentionList, value])}
                >
                    {suggestions?.map((itm, idx) => <Option key={idx} value={itm.name}>{itm.picture ? <Avatar src={itm.picture} /> : dummyDp}{" " + itm.name}</Option>)}
                </Mentions>
            </Spin>
        </Modal>
    )

    return (
        <>
            <Input
                size="large"
                placeholder={" what's on your mind, " + username?.split(' ')?.[0] + " ?"}
                prefix={picture ? <Avatar src={picture} /> : dummyDp}
                style={commonStyles.createPost}
                onClick={() => setShow(true)} />

            {createPostModal()}
        </>
    );
}

export default CreatePost;