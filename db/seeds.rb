# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Image.destroy_all
Follow.destroy_all
Like.destroy_all
Comment.destroy_all

ins = User.create({
  username: 'instagram',
  profile_image: File.open('app/assets/images/seeds/ins.jpg'),
  full_name: 'instagram',
  bio: 'Discovering — and telling — stories from around the world. Curated by Instagram’s community team. blog.instagram.com',
  email: 'instagram@email.com',
  password: 'password'
  })
taylor = User.create({
  username: 'taylorswift',
  profile_image: File.open('app/assets/images/seeds/taylor.jpg'),
  full_name: 'Taylor Swift',
  bio: 'Born in 1989. taylor.lk/IDWLFVevo',
  email: 'taylorswift@email.com',
  password: 'password'
  })
selena = User.create({
  username: 'selenagomez',
  profile_image: File.open('app/assets/images/seeds/selena.jpg'),
  full_name: 'Selena Gomez',
  bio: 'By grace through faith www.vogue.com/article/selena-gomez-april-cover-interview-mental-health-instagram',
  email: 'selenagomez@email.com',
  password: 'password'
  })
ariana = User.create({
  username: 'arianagrande',
  profile_image: File.open('app/assets/images/seeds/ariana.jpg'),
  full_name: 'Ariana Grande',
  bio: 'dangerous woman smarturl.it/QuitiT',
  email: 'arianagrande@email.com',
  password: 'password'
  })
kim = User.create({
  username: 'kimkardashian',
  profile_image: File.open('app/assets/images/seeds/kim.jpg'),
  full_name: 'Kim Kardashian West',
  bio: 'itunes.apple.com/us/app/kim-kardashian-west-official/id1000716588?mt=8',
  email: 'kim@email.com',
  password: 'password'
  })
justin = User.create({
  username: 'justinbieber',
  profile_image: File.open('app/assets/images/seeds/justin.jpg'),
  full_name: 'Justin Bieber',
  bio: 'Help change the world.',
  email: 'justin@email.com',
  password: 'password'
  })
doge = User.create({
  username: 'world_famous_doge',
  profile_image: File.open('app/assets/images/seeds/doge.jpg'),
  full_name: 'DOGE',
  bio: 'FEATURING THE FUNNIEST SHIBA PICS ON INSTAGRAM Get your shiba or even your own meme featured here!!!!!',
  email: 'doge@email.com',
  password: 'password'
  })

Follow.create({follower_id:ins.id, following_id:taylor.id})
Follow.create({follower_id:ins.id, following_id:selena.id})
Follow.create({follower_id:ins.id, following_id:ariana.id})
Follow.create({follower_id:ins.id, following_id:kim.id})
Follow.create({follower_id:ins.id, following_id:justin.id})
Follow.create({follower_id:taylor.id, following_id:justin.id})
Follow.create({follower_id:taylor.id, following_id:kim.id})
Follow.create({follower_id:taylor.id, following_id:selena.id})
Follow.create({follower_id:taylor.id, following_id:ins.id})
Follow.create({follower_id:taylor.id, following_id:ariana.id})
Follow.create({follower_id:selena.id, following_id:taylor.id})
Follow.create({follower_id:selena.id, following_id:kim.id})
Follow.create({follower_id:selena.id, following_id:justin.id})
Follow.create({follower_id:ariana.id, following_id:taylor.id})
Follow.create({follower_id:ariana.id, following_id:kim.id})
Follow.create({follower_id:ariana.id, following_id:selena.id})
Follow.create({follower_id:ariana.id, following_id:ins.id})
Follow.create({follower_id:kim.id, following_id:ins.id})
Follow.create({follower_id:kim.id, following_id:taylor.id})
Follow.create({follower_id:kim.id, following_id:justin.id})
Follow.create({follower_id:kim.id, following_id:ariana.id})
Follow.create({follower_id:doge.id, following_id:ins.id})
Follow.create({follower_id:doge.id, following_id:taylor.id})
Follow.create({follower_id:doge.id, following_id:selena.id})
Follow.create({follower_id:doge.id, following_id:ariana.id})
Follow.create({follower_id:doge.id, following_id:kim.id})
Follow.create({follower_id:doge.id, following_id:justin.id})
Follow.create({follower_id:ins.id, following_id:doge.id})
Follow.create({follower_id:taylor.id, following_id:doge.id})
Follow.create({follower_id:selena.id, following_id:doge.id})
Follow.create({follower_id:ariana.id, following_id:doge.id})
Follow.create({follower_id:kim.id, following_id:doge.id})
Follow.create({follower_id:justin.id, following_id:doge.id})

doge1 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge1.png')})
doge3 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge3.png')})
doge4 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge4.png')})
doge5 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge5.png')})
doge6 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge6.png')})
doge8 = Image.create({user_id: doge.id, image:File.open('app/assets/images/seeds/doge8.png')})
ins1 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins1.png')})
ins2 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins2.png')})
ins3 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins3.png')})
ins4 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins4.png')})
ins5 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins5.png')})
ins6 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins6.png')})
ins7 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins7.png')})
ins8 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins8.png')})
ins9 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins9.png')})
ins10 = Image.create({user_id: ins.id, image:File.open('app/assets/images/seeds/ins10.png')})
ariana1 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana1.png')})
ariana2 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana2.png')})
ariana3 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana3.png')})
ariana4 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana4.png')})
ariana5 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana5.png')})
ariana6 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana6.png')})
ariana7 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana7.png')})
ariana8 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana8.png')})
ariana9 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana9.png')})
ariana10 = Image.create({user_id: ariana.id, image:File.open('app/assets/images/seeds/ariana10.png')})
justin1 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin1.png')})
justin2 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin2.png')})
justin3 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin3.png')})
justin4 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin4.png')})
justin5 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin5.png')})
justin6 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin6.png')})
justin7 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin7.png')})
justin8 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin8.png')})
justin9 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin9.png')})
justin10 = Image.create({user_id: justin.id, image:File.open('app/assets/images/seeds/justin10.png')})
kim1 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim1.png')})
kim2 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim2.png')})
kim3 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim3.png')})
kim4 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim4.png')})
kim5 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim5.png')})
kim6 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim6.png')})
kim7 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim7.png')})
kim8 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim8.png')})
kim9 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim9.png')})
kim10 = Image.create({user_id: kim.id, image:File.open('app/assets/images/seeds/kim10.png')})
selena1 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena1.png')})
selena2 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena2.png')})
selena3 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena3.png')})
selena4 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena4.png')})
selena5 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena5.png')})
selena6 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena6.png')})
selena7 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena7.png')})
selena8 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena8.png')})
selena9 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena9.png')})
selena10 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena10.png')})
selena11 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena11.png')})
selena12 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena12.png')})
selena13 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena13.png')})
selena14 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena14.png')})
selena15 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena15.png')})
selena16 = Image.create({user_id: selena.id, image:File.open('app/assets/images/seeds/selena16.png')})
taylor1 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor1.png')})
taylor2 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor2.png')})
taylor3 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor3.png')})
taylor4 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor4.png')})
taylor5 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor5.png')})
taylor6 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor6.png')})
taylor7 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor7.png')})
taylor8 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor8.png')})
taylor9 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor9.png')})
taylor10 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor10.png')})
taylor11 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor11.png')})
taylor12 = Image.create({user_id: taylor.id, image:File.open('app/assets/images/seeds/taylor12.png')})

Like.create({user_id: ins.id, image_id: taylor1.id})
Like.create({user_id: ins.id, image_id: taylor2.id})
Like.create({user_id: ins.id, image_id: taylor3.id})
Like.create({user_id: ins.id, image_id: taylor4.id})
Like.create({user_id: ins.id, image_id: taylor5.id})
Like.create({user_id: ins.id, image_id: taylor6.id})
Like.create({user_id: ins.id, image_id: taylor7.id})
Like.create({user_id: ins.id, image_id: taylor8.id})
Like.create({user_id: ins.id, image_id: taylor9.id})
Like.create({user_id: ins.id, image_id: taylor10.id})
Like.create({user_id: ins.id, image_id: justin1.id})
Like.create({user_id: ins.id, image_id: justin2.id})
Like.create({user_id: ins.id, image_id: justin3.id})
Like.create({user_id: ins.id, image_id: justin4.id})
Like.create({user_id: ins.id, image_id: justin5.id})
Like.create({user_id: ins.id, image_id: justin6.id})
Like.create({user_id: ins.id, image_id: selena16.id})
Like.create({user_id: ins.id, image_id: selena15.id})
Like.create({user_id: ins.id, image_id: selena14.id})
Like.create({user_id: ins.id, image_id: selena13.id})
Like.create({user_id: ins.id, image_id: selena12.id})
Like.create({user_id: ins.id, image_id: selena11.id})
Like.create({user_id: ins.id, image_id: selena10.id})
Like.create({user_id: ins.id, image_id: selena9.id})
Like.create({user_id: ins.id, image_id: selena8.id})
Like.create({user_id: ins.id, image_id: selena7.id})
Like.create({user_id: ins.id, image_id: selena6.id})
Like.create({user_id: ins.id, image_id: selena5.id})
Like.create({user_id: ins.id, image_id: selena4.id})
Like.create({user_id: ins.id, image_id: selena3.id})
Like.create({user_id: ins.id, image_id: ariana4.id})
Like.create({user_id: ins.id, image_id: ariana5.id})
Like.create({user_id: ins.id, image_id: ariana6.id})
Like.create({user_id: ins.id, image_id: ariana7.id})
Like.create({user_id: ins.id, image_id: kim4.id})
Like.create({user_id: ins.id, image_id: kim5.id})
Like.create({user_id: ins.id, image_id: kim6.id})
Like.create({user_id: ins.id, image_id: kim7.id})
Like.create({user_id: ins.id, image_id: kim8.id})
Like.create({user_id: ins.id, image_id: justin4.id})
Like.create({user_id: ins.id, image_id: justin5.id})
Like.create({user_id: ins.id, image_id: justin6.id})
Like.create({user_id: ins.id, image_id: justin7.id})
Like.create({user_id: ins.id, image_id: justin1.id})
Like.create({user_id: ins.id, image_id: justin2.id})
Like.create({user_id: ins.id, image_id: justin3.id})
Like.create({user_id: taylor.id, image_id: ins1.id})
Like.create({user_id: taylor.id, image_id: ins2.id})
Like.create({user_id: taylor.id, image_id: ins4.id})
Like.create({user_id: taylor.id, image_id: ins5.id})
Like.create({user_id: taylor.id, image_id: ins7.id})
Like.create({user_id: taylor.id, image_id: ins8.id})
Like.create({user_id: taylor.id, image_id: ins9.id})
Like.create({user_id: taylor.id, image_id: ins10.id})
Like.create({user_id: taylor.id, image_id: justin9.id})
Like.create({user_id: taylor.id, image_id: justin7.id})
Like.create({user_id: taylor.id, image_id: justin8.id})
Like.create({user_id: taylor.id, image_id: justin5.id})
Like.create({user_id: taylor.id, image_id: justin3.id})
Like.create({user_id: taylor.id, image_id: justin2.id})
Like.create({user_id: taylor.id, image_id: justin1.id})
Like.create({user_id: taylor.id, image_id: selena2.id})
Like.create({user_id: taylor.id, image_id: selena4.id})
Like.create({user_id: taylor.id, image_id: selena6.id})
Like.create({user_id: taylor.id, image_id: selena7.id})
Like.create({user_id: taylor.id, image_id: selena8.id})
Like.create({user_id: taylor.id, image_id: selena10.id})
Like.create({user_id: taylor.id, image_id: ariana1.id})
Like.create({user_id: taylor.id, image_id: ariana3.id})
Like.create({user_id: taylor.id, image_id: ariana4.id})
Like.create({user_id: taylor.id, image_id: ariana2.id})
Like.create({user_id: taylor.id, image_id: ariana6.id})
Like.create({user_id: taylor.id, image_id: ariana8.id})
Like.create({user_id: taylor.id, image_id: ariana9.id})
Like.create({user_id: taylor.id, image_id: ariana10.id})
Like.create({user_id: taylor.id, image_id: kim2.id})
Like.create({user_id: taylor.id, image_id: kim3.id})
Like.create({user_id: taylor.id, image_id: kim5.id})
Like.create({user_id: taylor.id, image_id: kim6.id})
Like.create({user_id: taylor.id, image_id: kim8.id})
Like.create({user_id: taylor.id, image_id: kim10.id})
Like.create({user_id: taylor.id, image_id: kim7.id})
Like.create({user_id: selena.id, image_id: ins1.id})
Like.create({user_id: selena.id, image_id: kim4.id})
Like.create({user_id: selena.id, image_id: kim7.id})
Like.create({user_id: selena.id, image_id: kim5.id})
Like.create({user_id: selena.id, image_id: kim9.id})
Like.create({user_id: selena.id, image_id: kim8.id})
Like.create({user_id: selena.id, image_id: kim3.id})
Like.create({user_id: selena.id, image_id: taylor2.id})
Like.create({user_id: selena.id, image_id: taylor4.id})
Like.create({user_id: selena.id, image_id: taylor5.id})
Like.create({user_id: selena.id, image_id: taylor6.id})
Like.create({user_id: selena.id, image_id: taylor8.id})
Like.create({user_id: selena.id, image_id: taylor9.id})
Like.create({user_id: selena.id, image_id: taylor10.id})
Like.create({user_id: selena.id, image_id: taylor12.id})
Like.create({user_id: selena.id, image_id: ariana2.id})
Like.create({user_id: selena.id, image_id: ariana4.id})
Like.create({user_id: selena.id, image_id: ariana6.id})
Like.create({user_id: selena.id, image_id: ariana8.id})
Like.create({user_id: selena.id, image_id: ariana9.id})
Like.create({user_id: selena.id, image_id: ariana1.id})
Like.create({user_id: selena.id, image_id: kim1.id})
Like.create({user_id: selena.id, image_id: kim10.id})
Like.create({user_id: selena.id, image_id: kim8.id})
Like.create({user_id: selena.id, image_id: kim6.id})
Like.create({user_id: selena.id, image_id: kim3.id})
Like.create({user_id: selena.id, image_id: kim5.id})
Like.create({user_id: selena.id, image_id: justin2.id})
Like.create({user_id: selena.id, image_id: justin4.id})
Like.create({user_id: selena.id, image_id: justin1.id})
Like.create({user_id: selena.id, image_id: justin3.id})
Like.create({user_id: selena.id, image_id: justin5.id})
Like.create({user_id: selena.id, image_id: justin7.id})
Like.create({user_id: selena.id, image_id: justin9.id})
Like.create({user_id: ariana.id, image_id: ins10.id})
Like.create({user_id: ariana.id, image_id: ins9.id})
Like.create({user_id: ariana.id, image_id: ins8.id})
Like.create({user_id: ariana.id, image_id: ins7.id})
Like.create({user_id: ariana.id, image_id: ins8.id})
Like.create({user_id: ariana.id, image_id: ins6.id})
Like.create({user_id: ariana.id, image_id: ins5.id})
Like.create({user_id: ariana.id, image_id: ins4.id})
Like.create({user_id: ariana.id, image_id: ins3.id})
Like.create({user_id: ariana.id, image_id: ins2.id})
Like.create({user_id: ariana.id, image_id: ins1.id})
Like.create({user_id: ariana.id, image_id: taylor12.id})
Like.create({user_id: ariana.id, image_id: taylor11.id})
Like.create({user_id: ariana.id, image_id: taylor10.id})
Like.create({user_id: ariana.id, image_id: taylor9.id})
Like.create({user_id: ariana.id, image_id: taylor8.id})
Like.create({user_id: ariana.id, image_id: taylor7.id})
Like.create({user_id: ariana.id, image_id: taylor6.id})
Like.create({user_id: ariana.id, image_id: taylor5.id})
Like.create({user_id: ariana.id, image_id: taylor4.id})
Like.create({user_id: ariana.id, image_id: selena16.id})
Like.create({user_id: ariana.id, image_id: selena15.id})
Like.create({user_id: ariana.id, image_id: selena14.id})
Like.create({user_id: ariana.id, image_id: selena13.id})
Like.create({user_id: ariana.id, image_id: selena12.id})
Like.create({user_id: ariana.id, image_id: selena11.id})
Like.create({user_id: ariana.id, image_id: selena10.id})
Like.create({user_id: ariana.id, image_id: selena9.id})
Like.create({user_id: ariana.id, image_id: selena8.id})
Like.create({user_id: ariana.id, image_id: selena7.id})
Like.create({user_id: ariana.id, image_id: selena6.id})
Like.create({user_id: ariana.id, image_id: selena5.id})
Like.create({user_id: ariana.id, image_id: selena4.id})
Like.create({user_id: ariana.id, image_id: kim10.id})
Like.create({user_id: ariana.id, image_id: kim9.id})
Like.create({user_id: ariana.id, image_id: kim8.id})
Like.create({user_id: ariana.id, image_id: kim7.id})
Like.create({user_id: ariana.id, image_id: kim6.id})
Like.create({user_id: ariana.id, image_id: kim5.id})
Like.create({user_id: ariana.id, image_id: kim4.id})
Like.create({user_id: ariana.id, image_id: kim3.id})
Like.create({user_id: ariana.id, image_id: justin10.id})
Like.create({user_id: ariana.id, image_id: justin9.id})
Like.create({user_id: ariana.id, image_id: justin8.id})
Like.create({user_id: ariana.id, image_id: justin7.id})
Like.create({user_id: ariana.id, image_id: justin6.id})
Like.create({user_id: ariana.id, image_id: justin5.id})
Like.create({user_id: ariana.id, image_id: justin4.id})
Like.create({user_id: ariana.id, image_id: justin3.id})
Like.create({user_id: kim.id, image_id: ins10.id})
Like.create({user_id: kim.id, image_id: ins9.id})
Like.create({user_id: kim.id, image_id: ins8.id})
Like.create({user_id: kim.id, image_id: ins7.id})
Like.create({user_id: kim.id, image_id: ins6.id})
Like.create({user_id: kim.id, image_id: ins5.id})
Like.create({user_id: kim.id, image_id: ins4.id})
Like.create({user_id: kim.id, image_id: ins3.id})
Like.create({user_id: kim.id, image_id: ins2.id})
Like.create({user_id: kim.id, image_id: ins1.id})
Like.create({user_id: kim.id, image_id: taylor12.id})
Like.create({user_id: kim.id, image_id: taylor11.id})
Like.create({user_id: kim.id, image_id: taylor10.id})
Like.create({user_id: kim.id, image_id: taylor9.id})
Like.create({user_id: kim.id, image_id: taylor8.id})
Like.create({user_id: kim.id, image_id: taylor7.id})
Like.create({user_id: kim.id, image_id: taylor6.id})
Like.create({user_id: kim.id, image_id: taylor5.id})
Like.create({user_id: kim.id, image_id: taylor4.id})
Like.create({user_id: kim.id, image_id: taylor3.id})
Like.create({user_id: kim.id, image_id: taylor2.id})
Like.create({user_id: kim.id, image_id: taylor1.id})
Like.create({user_id: kim.id, image_id: selena10.id})
Like.create({user_id: kim.id, image_id: selena9.id})
Like.create({user_id: kim.id, image_id: selena8.id})
Like.create({user_id: kim.id, image_id: selena7.id})
Like.create({user_id: kim.id, image_id: selena6.id})
Like.create({user_id: kim.id, image_id: selena5.id})
Like.create({user_id: kim.id, image_id: selena4.id})
Like.create({user_id: kim.id, image_id: selena3.id})
Like.create({user_id: kim.id, image_id: selena2.id})
Like.create({user_id: kim.id, image_id: selena1.id})
Like.create({user_id: kim.id, image_id: ariana10.id})
Like.create({user_id: kim.id, image_id: ariana9.id})
Like.create({user_id: kim.id, image_id: ariana8.id})
Like.create({user_id: kim.id, image_id: ariana7.id})
Like.create({user_id: kim.id, image_id: ariana6.id})
Like.create({user_id: kim.id, image_id: ariana5.id})
Like.create({user_id: kim.id, image_id: ariana4.id})
Like.create({user_id: kim.id, image_id: ariana3.id})
Like.create({user_id: kim.id, image_id: ariana2.id})
Like.create({user_id: kim.id, image_id: ariana1.id})
Like.create({user_id: kim.id, image_id: kim10.id})
Like.create({user_id: kim.id, image_id: kim9.id})
Like.create({user_id: kim.id, image_id: kim8.id})
Like.create({user_id: kim.id, image_id: kim7.id})
Like.create({user_id: kim.id, image_id: kim6.id})
Like.create({user_id: kim.id, image_id: kim5.id})
Like.create({user_id: kim.id, image_id: kim4.id})
Like.create({user_id: kim.id, image_id: kim3.id})
Like.create({user_id: kim.id, image_id: kim2.id})
Like.create({user_id: kim.id, image_id: kim1.id})
Like.create({user_id: kim.id, image_id: kim10.id})
Like.create({user_id: justin.id, image_id: ins10.id})
Like.create({user_id: justin.id, image_id: ins9.id})
Like.create({user_id: justin.id, image_id: ins8.id})
Like.create({user_id: justin.id, image_id: ins7.id})
Like.create({user_id: justin.id, image_id: ins6.id})
Like.create({user_id: justin.id, image_id: ins5.id})
Like.create({user_id: justin.id, image_id: ins4.id})
Like.create({user_id: justin.id, image_id: ins3.id})
Like.create({user_id: justin.id, image_id: ins2.id})
Like.create({user_id: justin.id, image_id: ins1.id})
Like.create({user_id: justin.id, image_id: taylor10.id})
Like.create({user_id: justin.id, image_id: taylor11.id})
Like.create({user_id: justin.id, image_id: taylor12.id})
Like.create({user_id: justin.id, image_id: taylor9.id})
Like.create({user_id: justin.id, image_id: taylor8.id})
Like.create({user_id: justin.id, image_id: taylor7.id})
Like.create({user_id: justin.id, image_id: taylor6.id})
Like.create({user_id: justin.id, image_id: taylor5.id})
Like.create({user_id: justin.id, image_id: taylor4.id})
Like.create({user_id: justin.id, image_id: taylor3.id})
Like.create({user_id: justin.id, image_id: taylor2.id})
Like.create({user_id: justin.id, image_id: taylor1.id})
Like.create({user_id: justin.id, image_id: selena10.id})
Like.create({user_id: justin.id, image_id: selena11.id})
Like.create({user_id: justin.id, image_id: selena12.id})
Like.create({user_id: justin.id, image_id: selena13.id})
Like.create({user_id: justin.id, image_id: selena14.id})
Like.create({user_id: justin.id, image_id: selena15.id})
Like.create({user_id: justin.id, image_id: selena16.id})
Like.create({user_id: justin.id, image_id: selena11.id})
Like.create({user_id: justin.id, image_id: selena12.id})
Like.create({user_id: justin.id, image_id: selena9.id})
Like.create({user_id: justin.id, image_id: selena8.id})
Like.create({user_id: justin.id, image_id: selena7.id})
Like.create({user_id: justin.id, image_id: selena6.id})
Like.create({user_id: justin.id, image_id: selena5.id})
Like.create({user_id: justin.id, image_id: selena4.id})
Like.create({user_id: justin.id, image_id: selena3.id})
Like.create({user_id: justin.id, image_id: selena2.id})
Like.create({user_id: justin.id, image_id: selena1.id})
Like.create({user_id: justin.id, image_id: ariana9.id})
Like.create({user_id: justin.id, image_id: ariana10.id})
Like.create({user_id: justin.id, image_id: ariana8.id})
Like.create({user_id: justin.id, image_id: ariana7.id})
Like.create({user_id: justin.id, image_id: ariana6.id})
Like.create({user_id: justin.id, image_id: ariana5.id})
Like.create({user_id: justin.id, image_id: ariana4.id})
Like.create({user_id: justin.id, image_id: ariana3.id})
Like.create({user_id: justin.id, image_id: ariana2.id})
Like.create({user_id: justin.id, image_id: ariana1.id})
Like.create({user_id: justin.id, image_id: kim10.id})
Like.create({user_id: justin.id, image_id: kim8.id})
Like.create({user_id: justin.id, image_id: kim7.id})
Like.create({user_id: justin.id, image_id: kim6.id})
Like.create({user_id: justin.id, image_id: kim5.id})
Like.create({user_id: justin.id, image_id: kim4.id})
Like.create({user_id: justin.id, image_id: kim3.id})
Like.create({user_id: justin.id, image_id: kim2.id})
Like.create({user_id: justin.id, image_id: kim1.id})
Like.create({user_id: ins.id, image_id: doge1.id})
Like.create({user_id: ins.id, image_id: doge3.id})
Like.create({user_id: ins.id, image_id: doge4.id})
Like.create({user_id: ins.id, image_id: doge5.id})
Like.create({user_id: ins.id, image_id: doge6.id})
Like.create({user_id: ins.id, image_id: doge8.id})
Like.create({user_id: taylor.id, image_id: doge1.id})
Like.create({user_id: taylor.id, image_id: doge3.id})
Like.create({user_id: taylor.id, image_id: doge4.id})
Like.create({user_id: taylor.id, image_id: doge5.id})
Like.create({user_id: taylor.id, image_id: doge6.id})
Like.create({user_id: taylor.id, image_id: doge8.id})
Like.create({user_id: selena.id, image_id: doge1.id})
Like.create({user_id: selena.id, image_id: doge3.id})
Like.create({user_id: selena.id, image_id: doge4.id})
Like.create({user_id: selena.id, image_id: doge5.id})
Like.create({user_id: selena.id, image_id: doge6.id})
Like.create({user_id: selena.id, image_id: doge8.id})
Like.create({user_id: ariana.id, image_id: doge1.id})
Like.create({user_id: ariana.id, image_id: doge3.id})
Like.create({user_id: ariana.id, image_id: doge4.id})
Like.create({user_id: ariana.id, image_id: doge5.id})
Like.create({user_id: ariana.id, image_id: doge6.id})
Like.create({user_id: ariana.id, image_id: doge8.id})
Like.create({user_id: kim.id, image_id: doge1.id})
Like.create({user_id: kim.id, image_id: doge3.id})
Like.create({user_id: kim.id, image_id: doge4.id})
Like.create({user_id: kim.id, image_id: doge5.id})
Like.create({user_id: kim.id, image_id: doge6.id})
Like.create({user_id: kim.id, image_id: doge8.id})
Like.create({user_id: justin.id, image_id: doge1.id})
Like.create({user_id: justin.id, image_id: doge3.id})
Like.create({user_id: justin.id, image_id: doge4.id})
Like.create({user_id: justin.id, image_id: doge5.id})
Like.create({user_id: justin.id, image_id: doge6.id})
Like.create({user_id: justin.id, image_id: doge8.id})

comments = [
  "we used to do this when we were kids (without awesome costumes though lol). If only we could do it now.",
  "Aggression is seems in her eyes which i loved d most",
  "Wicked photo!",
  "自信的一天 也许吧少不了的是 满足 ! 感恩！",
  "wow!!!",
  "She awesome",
  "Are we out of the woods?",
  "LOVE YOUR SONG!!!!!!",
  "Beautiful ✌❤😍😍❤❤😍😍",
  "Amazing shot",
  "Nice picture",
  "好美~~~",
  "💗💟💙💛💜💚😉😊",
  "👌👌👌",
  "🌻",
  "So proud with a hat.♡",
  "💗💖😍😍",
  "Awesome pic",
  "👍👍👍🌸🌸🌸",
  "Incredible 💙",
  "Love you Instagramme",
  "Love this shot !",
  "I love doge",
  "Beautiful",
  "AMAZING💞💞💞",
  "😀😀😃",
  "Magic✨Madness✨Heaven✨Sin",
  "amazing!!!!! 😂😍",
  "awwwwww <3 <3",
  "Very much in my feelings about my big brother getting married. Even though we for sure knew it would be him first. May God bless you and your beautiful wife Henrie! 💕",
  "always playing and working on something magical 💕",
  "Love this song 💗💗💗",
  "💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜",
  "It is veryyyyyy perfectyyy😍😍😍😻😻😻",
  "the aesthetic of this video tho😍😍",
  "Omgg❤❤❤",
  "YOU ARE SO AMAZING💫💫💫💫",
]
users = [ins, taylor, selena, ariana, kim, justin, doge]
images = [
  doge1, doge3, doge4, doge5, doge6, doge8, ins1, ins2, ins3, ins4, ins5, ins6,
  ins7, ins8, ins9, ins10, ariana1, ariana2, ariana3, ariana4, ariana5, ariana6,
  ariana7, ariana8, ariana9, ariana10, justin1, justin2, justin3, justin4,
  justin5, justin6, justin7, justin8, justin9, justin10, kim1, kim2, kim3, kim4,
  kim5, kim6,kim7, kim8, kim9, kim10, selena1, selena2, selena3, selena4,
  selena5, selena6, selena7, selena8, selena9, selena10, selena11, selena12,
  selena13, selena14, selena15, selena16, taylor1, taylor2, taylor3, taylor4,
  taylor5, taylor6, taylor7, taylor8, taylor9, taylor10, taylor11, taylor12]

300.times do
  Comment.create({body: comments.sample, user_id: users.sample.id, image_id: images.sample.id})
end
