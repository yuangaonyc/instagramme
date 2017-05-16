# Instagramme

**[Instagramme][instagramme]** is a clone of the popular photo-sharing application and service, Instagram, that allows users to share pictures and videos either publicly or privately

[instagramme]: http://instagramme-app.herokuapp.com/

## Features

- User authentication
  - Users get dynamic feedbacks of information validation when signing up.
  - Users are allowed to log in with username or email with correct corresponding password.
- User settings
  - Users can change their basic info on their personal page, such as full names and bio.
  - Users can change new passwords after verifying their old passwords.
  - Users can change their privacy setting to make their accounts private.
- Follows
  - Users can follow and unfollow any other users.
  - After following another user, their photos will be added to the current user's photo feed page, ordered by time of posting.
- Posts
  - After logging in, users can post photos by clicking on the camera icon in the top left corner and upload images from their computers.
  - Users can then edit descriptions, such as location, of the photo on their personal page.
- Likes
  - Users can like and unlike any photos that are visible to them.
  - Numbers of likes are counted and displayed in the image information section.
- Comments
  - Users can comment on any photos that are visible to them.
  - Users have access to delete any comments on their own photos.
  - Users have access to delete their own comments that are posted on other people's photos.
- Notifications
  - Users receive notifications when other users start following them, like or comment on their photos.
  - A red dot will be shown under the notification icon to indicate users when they have unread notifications.

## Languages, Frameworks, and Libraries
  - Backend
    - Ruby on Rails framework
    - PostgreSQL database
  - Frontend
    - React.js for visual components
    - Redux for state management
    - jQuery for AJAX requests
  - Gems
    - Bcrypt for user authentication
    - Jbuilder for custom JSON responses
    - Figaro for storing API keys
    - Paperclip for uploading images
    - AWS-sdk for storing images
    - Kaminari for infinite scroll

## Screenshots

![Welcome Page](/docs/screenshots/welcome.png)
![Feed Page](/docs/screenshots/feed.png)
![User Page](/docs/screenshots/user.png)
![Image Window](/docs/screenshots/image.png)
![Discover Page](/docs/screenshots/discover.png)
