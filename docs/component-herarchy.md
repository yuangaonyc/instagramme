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
 - UserHeader
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
 - UserHeader
 - Comments
 - InteractionBar
 - CreateComment

**ExploreContainer**
 - Header
 + ExploreItem
  - UserHeader
  - ShortImages

**FollowerContainer**
 - ShowContainer
 + Followers
  - UserHeader

**FollowingContainer**
 - ShowContainer
 + Followings
  -UserHeader

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "IndexContainer" |
| "/:username" | ShowContainer |
| "/explore" | ExploreContainer |
| "/:image_id" | ImageContainer |
