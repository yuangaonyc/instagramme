json.extract! feed, :id
json.username feed.user.username
json.profile_image_url feed.user.profile_image.url
json.time_ago_in_words time_ago_in_words(feed.created_at)
json.image_url feed.image.url
json.likes feed.likes, partial: "api/likes/like", as: :like
json.comments feed.comments, partial: "api/comments/comment", as: :comment
