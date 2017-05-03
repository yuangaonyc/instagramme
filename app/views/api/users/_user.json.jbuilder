json.extract! user, :id, :username, :email, :full_name, :bio
json.profile_image_url image_path(user.profile_image.url)
