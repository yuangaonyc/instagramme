json.extract! notification, :id, :user_id, :notifier_id, :category, :image_id,
  :read, :content
json.notifier_username notification.notifier.username
json.notifier_profile_image_url notification.notifier.profile_image.url
if notification.image.present?
  json.image_url notification.image.image.url
end
json.time_ago_in_words time_ago_in_words(notification.created_at)
