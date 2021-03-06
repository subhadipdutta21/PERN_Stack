const { gql } = require("apollo-server");

module.exports = gql`
  # types
  type User {
    user_id: ID!
    name: String!
    email: String!
    contact: Int!
    password: String!
  }

  type RegisterResponse {
    message: String
    error: Boolean
  }

  type AuthResponse {
    message: String
    error: Boolean
    token: String
    name: String
    email: String
    picture: String
    user_id: String
  }

  type Post {
    id: String!
    body: String!
    mentions: [String]
    user_id: String!
    picture: String
    name: String!
    likes: [Like!]!
    comments: [Comment]
    created_at: String
  }

  type Like {
    liker_id: String
    liker_name: String
    liker_email: String
  }

  type Comment {
    commentator_id: String
    commentator_name: String
    commentator_email: String
    picture: String
    comment: String
    is_deleted: Boolean
  }

  type CreatePostResponse {
    message: String
    error: Boolean
  }

  type LikeResponse {
    message: String
    error: Boolean
  }

  type CommentResponse {
    message: String
    error: Boolean
  }

  type Suggestions {
    suggestions: [Suggestion]
    error: Boolean
    message: String
  }

  type Suggestion {
    name: String!
    picture: String
  }

  type Notification {
    # id: String
    # content: String
    post_id: String
    from: String
    # to: String
    # createdAt: String
    mentions: [String]
    message: String
    error: Boolean
  }

  type NotificationList {
    tagger_name: String
    post_id: String
    tagger_id: String
    created_at: String
    tagged: String
    tagger_dp: String
  }

  # inputs

  input RegisterInput {
    name: String!
    email: String!
    contact: Int!
    password: String!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  input FetchPostInput {
    post_id: String
    user_id: String
    limit: Int
    offset: Int
  }

  input CreatePostInput {
    body: String!
    mentions: [String]
    user_id: String!
    post_id: String
    isDeleted: Boolean
  }

  input LikeInput {
    post_id: String!
    user_id: String!
  }

  input CommentInput {
    post_id: String!
    comment_id: String
    comment: String!
    commentator_user_id: String!
    is_deleted: Boolean
  }

  input FetchCommentInput {
    post_id: String!
  }

  input authToken {
    token: String!
  }

  input mentionInput {
    searchTerm: String!
  }

  input NotificationInput {
    to: String
    content: String
  }

  input user {
    name: String
    limit: Int
    offset: Int
  }

  # queries

  type Query {
    authenticateUser(input: AuthInput!): AuthResponse!
    fetchPosts(input: FetchPostInput): [Post]!
    fetchCommentsOnPostID(input: FetchCommentInput!): [Comment]
    oAuth(input: authToken!): AuthResponse!
    mentions(input: mentionInput!): Suggestions
    getNotifications: Notification!
    fetchNotificationList(input: user!): [NotificationList]
  }

  # mutations

  type Mutation {
    register(input: RegisterInput!): RegisterResponse!
    createPost(input: CreatePostInput!): CreatePostResponse!
    createLikes(input: LikeInput!): LikeResponse!
    postComment(input: CommentInput!): CommentResponse!
    sendNotifications(input: NotificationInput!): Notification!
  }

  type Subscription {
    newNotification: Notification!
  }
`;
