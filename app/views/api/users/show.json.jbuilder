json.partial! "api/users/user", user: @user
json.images @user.images, partial: "api/images/image", as: :image
