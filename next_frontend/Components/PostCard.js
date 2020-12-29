import { EditOutlined, HeartFilled, MessageOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, List, Mentions, message, Skeleton, Spin } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { client } from '../apolloGqlClient';
import { FETCH_COMMENTS_QUERY, POST_COMMENT } from '../gqlQueries';
import commonStyles from './styles/commonStyles';

const { Meta } = Card;
const { Option } = Mentions;

const PostCard = ({ content, name, postID, idx, avatar, comments, likes, mentions }) => {    

    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState(comments)
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const dummyDp = <Avatar style={commonStyles.bgGreen} icon={<UserOutlined />} />
    const dp = avatar ? <Avatar src={avatar} /> : dummyDp

    const [show, setShow] = useState(false)

    const fetchComments = async _ => {
        setLoading(true)
        try {
            let resp = await client.query({
                query: FETCH_COMMENTS_QUERY, fetchPolicy: 'no-cache', variables: { input: { post_id: postID } }
            })

            console.log(resp)
            resp?.data?.fetchCommentsOnPostID ?
                setAllComments([...allComments, ...resp?.data?.fetchCommentsOnPostID]) :
                message.error('could not fetch comments')
        }
        catch (error) { console.log(error) }
        finally { setLoading(false) }
    }

    const postComment = async () => {
        setLoading2(true)
        try {
            let resp = await client.mutate({
                mutation: POST_COMMENT, fetchPolicy: 'no-cache', variables: {
                    input: {
                        post_id: postID,
                        comment,
                        commentator_user_id: Cookies.get('user_id'),
                        is_deleted: false
                    }
                }
            })

            console.log(resp)
            fetchComments()
        } catch (error) { console.log(error) }
        finally { setLoading2(false) }
    }

    const onChange = (value) => {
        setComment(value)
    }

    const onSelect = (option) => {
        console.log('select', option);
    }

    const contentModifier = content => {
        let tempContent = content
        if (mentions) {
            mentions.forEach(itm => {
                tempContent = tempContent.replace("@" + itm, '')
            })
            let finalStr = tempContent.split(' ').filter(itm => itm).join(" ")
            return finalStr
        } else return content
    }

    const commentBox = () => (
        <Card bordered={false} style={commonStyles.wd500}>
            <Mentions
                style={{ width: '100%' }}
                onChange={onChange}
                onSelect={onSelect}
                placeholder="Add a comment"
                key={idx}
            >
                <Option value="afc163">afc163</Option>
                <Option value="zombieJ">zombieJ</Option>
                <Option value="yesmeck">yesmeck</Option>
            </Mentions>
            {comment &&
                <Button size='small' loading={loading2} type="primary" style={{ float: 'right' }} onClick={_ => postComment()}>
                    {loading2 ? 'Posting' : "Post"}
                </Button>
            }
            <Spin spinning={loading}>
                <List
                    itemLayout="horizontal" dataSource={allComments}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.picture ? <Avatar src={item.picture} /> : dummyDp}
                                title={<a href="https://ant.design">{item.commentator_name}</a>}
                                description={item?.comment}
                            />
                        </List.Item>
                    )}
                />
            </Spin>
        </Card>
    )


    const PostBody = ({ content }) => (
        <>
            {contentModifier(content)}
            {mentions?.map((itm, idx) => (
                <a key={idx}>
                    {" @" + itm + " "}
                </a>
            ))}
        </>
    )


    return (
        <>
            {/* card component for post */}
            <Card
                style={commonStyles.container}
                actions={[ // like comment buttons
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    likes.length > 0 ?
                        <Badge size="small" count={likes.length}> <HeartFilled /> </Badge> :
                        <HeartFilled />,
                    <div onClick={() => setShow(!show)}>
                        {comments.length > 0 ?
                            <Badge size="small" count={comments.length}> <MessageOutlined /> </Badge> :
                            <MessageOutlined />}
                    </div>
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta avatar={dp} title={name} description={<PostBody content={content} />} />
                </Skeleton>
            </Card>

            {/* bring the comment section */}
            {show && commentBox()}
        </>
    );
}

export default PostCard;