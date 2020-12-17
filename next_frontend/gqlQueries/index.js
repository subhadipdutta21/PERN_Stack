import { gql } from '@apollo/client';

export const fetch_posts_query = gql`
query fetchPosts($input:FetchPostInput) {
 fetchPosts(input: $input){  
    id
   body
   user_id
   picture
   name
   mentions
   likes{
     liker_name
     liker_id
     liker_email
   }
   comments{
      picture
      comment
      is_deleted
      commentator_name
    }
   }}`


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


export const oAuthentication = gql`
query oAuth($input: authToken!){
  oAuth(input: $input) {
    message
    error
    token
    name 
    email
    picture
    user_id
  }
}`


export const create_post = gql`
mutation createPost($input: CreatePostInput!){
  createPost(input: $input) {
    message
    error
  }
}`

export const fetch_mentions = gql`
query mentions($input: mentionInput!){
  mentions(input: $input){
    suggestions {
    name
    picture    
  }  
    error 
    message
  }  
}`

export const post_comment = gql`
mutation postComment($input: CommentInput!) {
postComment(input: $input){
  message
  error
}}
`
