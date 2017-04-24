json.extract! image, :location, :author_id
json.image_url image_path(image.image.url)
json.author_username image.author.username
