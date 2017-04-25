json.extract! image, :location, :author_id, :id
json.image_url image_path(image.image.url)
json.author_username image.author.username
json.author_profile_image_url image.author.profile_image.url
json.time_ago_in_words time_ago_in_words(image.created_at)
