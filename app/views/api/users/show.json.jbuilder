json.partial! "api/users/user", user: @user
json.images @user.images.sort_by{ |img| img.created_at }, partial: "api/images/image", as: :image
