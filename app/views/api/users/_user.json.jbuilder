json.extract! user, :id, :username, :email, :full_name, :bio, :images
json.profile_image_url image_path(user.profile_image.url)
