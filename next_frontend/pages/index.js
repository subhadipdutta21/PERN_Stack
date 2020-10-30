import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { client } from '../apolloGqlClient';
import PostCard from '../Components/PostCard';
import { fetch_posts_query } from '../gqlQueries';

const Home = ({ posts }) => {
  console.log(posts)

  return (
    posts.map((itm, idx) => <PostCard key={itm.id} content={itm.body} name={itm.name} postID={itm.id} />)
  );
}

export async function getStaticProps() {

  console.log('clled server side')
  let posts = []
  try {
    const resp = await client.query({
      query: fetch_posts_query, fetchPolicy: 'no-cache', variables: {
        input: null
      }
    })
    console.log(resp)
    resp?.data?.fetchPosts ? posts = resp?.data?.fetchPosts : null

  } catch (error) { console.log(error); message.error('Could not fetch posts') }

  return {
    props: {
      posts
    },
  }
}

export default Home;