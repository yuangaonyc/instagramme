```
{
  session: {
    currentUser: {
      id: 1
      username: 'user'
    }
    errors: ['username is already being used']
  }

  indexImages: {
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

  showUser: {
    id: 3
    username: 'user3'
    full_name: 'Full Name'
    bio: 'hello there'
    profileImageUrl: 'app/assests/images/image1.png'

    images: {
      5: {
        id: 5
        imageUrl: 'app/assests/images/image5'
      }
      6: {
        id: 6
        imageUrl: 'app/assests/images/image6'
      }
    }

    followers {
      2: {
        id: 2
        username: 'user2'
        full_name: 'Full Name2'
      }
      4: {
        id: 4
        username: 'user4'
        full_name: 'full_name4'
      }
    }

    following {
      2: {
        id: 2
        username: 'user2'
        full_name: 'Full Name2'
      }
      4: {
        id: 4
        username: 'user4'
        full_name: 'full_name4'
      }
    }    
  }

  showImage: {
    4: {
      id: 4
      authorId: 3
      authorUsername: 'user3'
      location: 'New Orleans, Louisiana'
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
}
```
