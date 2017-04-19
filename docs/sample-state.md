{
  session: {
    currentUser: {
      id: 1
      username: 'user'
    }
    errors: ['username is already being used']
  }

  showUser: {
    id: 3
    username: 'user3'
    fullname: 'Full Name'
    bio: 'hello there'
    profileImageUrl: 'app/assests/images/image1.png'

    images: {
      4: {
        id: 4
        authorId: 3
        imageUrl: 'app/assets/images/image1.png'
        location: 'manhattan'
        likes: {
          1: {
            likerId: 1
            likerUsername: 'user'
          }
          2: {
            likerId: 2
            likerUsername: 'user2'
          }
        }
        comments: {
          1: {
            commenterId: 1
            commenterUsername: 'user'
            body: 'Looks delicious!'
          }
          2: {
            commenterId: 1
            commenterUsername: 'user'
            body: 'Happy birthday!'
          }
        }
      }
    }

    followers {
      2: {
        id: 2
        username: 'user2'
        fullname: 'Full Name2'
      }
      4: {
        id: 4
        username: 'user4'
        fullname: 'fullname4'
      }
    }

    following {
      2: {
        id: 2
        username: 'user2'
        fullname: 'Full Name2'
      }
      4: {
        id: 4
        username: 'user4'
        fullname: 'fullname4'
      }
    }
  }

  feedImages: {
    1: {
      id: 1
      authorId: 2
      authorUsername: 'user2'
      imageUrl: 'app/assets/images/image1.png'
      location: 'manhattan'
      likes: {
        1: {
          likerId: 1
          likerUsername: 'user1'
        }
        2: {
          likerId: 2
          likerUsername: 'user2'
        }
      }
      comments: {
        1: {
          id: 1
          commenterId: 2
          commenterUsername: 'user2'
          body: 'Looks delicious!'
        }
        2: {
          id: 2
          commenterId: 2
          commenterUsername: 'user2'
          body: 'Happy birthday!'
        }
      }
    }
  }
}
