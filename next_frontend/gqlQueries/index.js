import { gql } from '@apollo/client';

export const fetch_posts_query = gql`
query fetchPosts($input:FetchPostInput) {
 fetchPosts(input: $input){  
    id
   body
   user_id
   name
   likes{
     liker_name
     liker_id
     liker_email
   }
   }
}`


export const fetch_comments_query = gql`
query fetchCommentsOnPostID($input: FetchCommentInput!) {
  fetchCommentsOnPostID(input: $input) {    
    commentator_id
    commentator_name
    commentator_email
    comment
    is_deleted
  }
}`
