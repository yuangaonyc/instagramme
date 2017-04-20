# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique
password_digest | string    | not null
full_name        | string    |
bio             | text      |
created_at      | string    | not null
updated_at      | string    | not null

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | integer   | not null
location    | string    |
created_at  | string    | not null
updated_at  | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
image_id    | integer   | not null, foreign key (references users), indexed
body        | text      | not null
created_at  | string    | not null
updated_at  | string    | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
image_id    | integer   | not null, foreign key (references users), indexed
created_at  | string    | not null
updated_at  | string    | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
following_id| integer   | not null, foreign key (references users), indexed
created_at  | integer   | not null
updated_at  | integer   | not null
