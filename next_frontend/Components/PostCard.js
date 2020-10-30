import { EditOutlined, HeartFilled, MessageOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Skeleton, List, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { client } from '../apolloGqlClient';
import { fetch_comments_query } from '../gqlQueries';

const { Meta } = Card;


const PostCard = ({ content, name, postID }) => {

    const avatar = <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

    const [show, setShow] = useState(false)

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    }, [postID])

    const getComments = async () => {
        let resp = await client.query({
            query: fetch_comments_query, fetchPolicy: 'no-cache', variables: {
                input: {
                    post_id: postID
                }
            }
        })

        console.log(resp?.data?.fetchCommentsOnPostID)
        resp?.data?.fetchCommentsOnPostID ? setComments(resp?.data?.fetchCommentsOnPostID) : message.error('Something went wrong!')
    }

    const commentBox = () => (
        <Card bordered={false} style={{ width: 500 }}>
            <Input placeholder="Basic usage" key={Math.random()} suffix={<PlusOutlined />} style={{ marginBottom: 15 }} />
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.commentator_name}</a>}
                            description={item.comment}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )


    return (
        <>
            <Card
                style={{ width: 500, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />, <EditOutlined key="edit" />,
                    <HeartFilled />, <MessageOutlined onClick={() => setShow(!show)} />
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta avatar={avatar} title={name} description={content} />
                </Skeleton>
            </Card>

            {show && commentBox()}
        </>
    );
}

export default PostCard;