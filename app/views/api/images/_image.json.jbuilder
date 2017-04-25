json.extract! image, :location, :user_id, :id
json.image_url image_path(image.image.url)
json.user_username image.user.username
json.user_profile_image_url image.user.profile_image.url
json.time_ago_in_words time_ago_in_words(image.created_at)
