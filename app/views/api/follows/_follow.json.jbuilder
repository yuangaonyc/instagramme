json.extract! follow, :id, :follower_id, :following_id, :pending
json.follower_username follow.follower.username
json.follower_full_name follow.follower.full_name
json.follower_profile_image_url follow.follower.profile_image.url
json.following_username follow.following.username
json.following_full_name follow.following.full_name
json.following_profile_image_url follow.following.profile_image.url
