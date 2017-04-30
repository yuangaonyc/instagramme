json.array! @users do |user|
  json.extract! user, :username, :full_name, :id
  json.profile_image_url user.profile_image.url
  json.images do
    json.array! user.images.sort_by{|i| i[:created_at]}.reverse.slice(0,3) do |image|
      json.url image.image.url
    end
  end
end
