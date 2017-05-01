json.extract! like, :user_id, :image_id, :id
json.liker_full_name like.user.full_name
json.liker_profile_image_url like.user.profile_image.url
json.liker_username like.user.username
