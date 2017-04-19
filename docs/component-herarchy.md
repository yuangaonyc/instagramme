## Component Hierarchy

**IndexContainer**
 - AuthForm
 - FeedPage

**AuthForm**
 - IndexImage
 - SignUpForm
 - LoginForm
 - Footer

**FeedPage**
 - Header
 - FeedItem
 - Footer

**FeedItem**
 - AuthorHeader
 - Image
 - IteractionBar
 - Comments
 - CreateComment

**ShowContainer**
 - Header
 - ShowHeader
 - AllImages
 - Footer

**ShowHeader**
 - ProfilePicture
 - Username
 - UserInteraction
 - UserStats
 - FullName
 - Bio

**ImageContainer**
 - Image
 - AuthorHeader
 - Comments
 - InteractionBar
 - CreateComment

**ExploreContainer**
 - Header
 + ExploreItem
  - AuthorHeader
  - ShortImages

**FollowerContainer**
 - ShowContainer
 + Followers
  - AuthorHeader

**FollowingContainer**
 - ShowContainer
 + Followings
  -AuthorHeader

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "IndexContainer" |
| "/:username" | ShowContainer |
| "/explore" | ExploreContainer |
| "/:image_id" | ImageContainer |
