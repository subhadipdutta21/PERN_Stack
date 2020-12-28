CREATE DATABASE todo;

CREATE TABLE todo
(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE restaurants
(
    id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range > 1 and price_range < 5)

)

-- PERN --

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users
(
    user_id uuid DEFAULT uuid_generate_v4(),
    name VARCHAR(15),
    email VARCHAR,
    contact VARCHAR,
    password VARCHAR,
    picture VARCHAR,
    PRIMARY KEY(user_id)
);

CREATE TABLE posts
(
    id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    body text NOT NULL,
    mentions text [],
    crerated_at TIMESTAMPZ DEFAULT now(),
    user_id uuid,
    is_deleted Boolean DEFAULT FALSE
)

CREATE TABLE likes
(
    post_id uuid,
    liker_user_id uuid
)

CREATE TABLE comments
(
    post_id uuid,
    comment_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    comment text,
    commentator_user_id uuid,
    is_deleted Boolean DEFAULT FALSE
)