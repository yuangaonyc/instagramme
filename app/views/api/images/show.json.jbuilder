json.partial! "api/images/image", image: @image
json.comments @image.comments, partial: "api/comments/comment", as: :comment
