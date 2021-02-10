import { gql } from "@apollo/client";

export const FETCH_POSTS_QUERY = gql`
  query fetchPosts($input: FetchPostInput) {
    fetchPosts(input: $input) {
      id
      body
      user_id
      picture
      name
      mentions
      likes {
        liker_name
        liker_id
        liker_email
      }
      comments {
        picture
        comment
        is_deleted
        commentator_name
      }
    }
  }
`;

export const FETCH_COMMENTS_QUERY = gql`
  query fetchCommentsOnPostID($input: FetchCommentInput!) {
    fetchCommentsOnPostID(input: $input) {
      commentator_id
      commentator_name
      commentator_email
      comment
      is_deleted
    }
  }
`;

export const OAUTHENTICATION = gql`
  query oAuth($input: authToken!) {
    oAuth(input: $input) {
      message
      error
      token
      name
      email
      picture
      user_id
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      message
      error
    }
  }
`;

export const FETCH_MENTIONS = gql`
  query mentions($input: mentionInput!) {
    mentions(input: $input) {
      suggestions {
        name
        picture
      }
      error
      message
    }
  }
`;

export const POST_COMMENT = gql`
  mutation postComment($input: CommentInput!) {
    postComment(input: $input) {
      message
      error
    }
  }
`;

export const NEW_NOTIFICATION = gql`
  subscription newNotification {
    newNotification {
      mentions
      message
      from
      post_id
    }
  }
`;

export const FETCH_NOTIFICATION_LIST = gql`
  query fetchNotificationList($input: user!) {
    fetchNotificationList(input: $input) {
      tagger_name
      post_id
      tagger_id
      created_at
      tagger_dp
    }
  }
`;
