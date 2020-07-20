json.array! @posts do |post|
  json.id post.id
  json.title post.title
  json.text post.text
  json.user_id post.user_id
  json.name post.user.name
  json.user_sign_in current_user
end