import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { client } from '../apolloGqlClient';
import CreatePost from '../Components/CreatePost';
import PostCard from '../Components/PostCard';
import { fetch_posts_query } from '../gqlQueries';
import Cookies from 'js-cookie';
import Router from "next/router";
import { checkIfLoggedIn } from '../helper';


const Home = _ => {

  const [allPosts, setAllPosts] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)

  const getPosts = async () => {
    setLoading(true)
    try {
      const resp = await client.query({
        query: fetch_posts_query, fetchPolicy: 'no-cache', variables: { input: { offset } }
      })

      resp?.data?.fetchPosts ? setAllPosts([...allPosts, ...resp.data.fetchPosts]) : message.error('No Posts!')
    }
    catch (error) { console.log(error); message.error('Could not fetch posts') }
    finally { setLoading(false) }
  }

  useEffect(() => { getPosts() }, [offset])

  return (
    <>
      <CreatePost setReload={setReload} reload={reload} />

      {allPosts?.map((itm, idx) =>
        <PostCard
          likes={itm.likes} avatar={itm.picture}
          key={idx} content={itm.body}
          name={itm.name} postID={itm.id}
          idx={idx} comments={itm.comments} mentions={itm.mentions} />
      )}
      <div style={{ textAlign: 'center' }}>
        <Button loading={loading} onClick={_ => setOffset(offset + 5)} style={{ margin: 20 }}>load more posts</Button>
      </div>
    </>
  );
}



// sever side call
// fetching posts with comments
// export async function getStaticProps() {
// let posts = []
// try {
//   const resp = await client.query({
//     query: fetch_posts_query, fetchPolicy: 'no-cache', variables: {
//       input: { offset: 0 }
//     }
//   })

//   resp?.data?.fetchPosts ? posts = resp?.data?.fetchPosts : null

// } catch (error) { console.log(error); message.error('Could not fetch posts') }



//   return {
//     props: { posts },
//   }
// }


export async function getServerSideProps(ctx) {
  checkIfLoggedIn(ctx);
  return {
    props: {}
  }
}



export default Home;