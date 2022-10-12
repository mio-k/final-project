# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
mio = User.create(username: "miok", password: "password", firstname: "Mio", lastname: "Kataoka", pic:"./img/dray.jpg", contact:"5103568868")
aimee = User.create(username: "aimeek", password: "password", firstname: "Aimee", lastname: "Kalnoskas", pic:"./img/dray.jpg", contact:"5103568868")
molly = User.create(username: "mollyb", password: "password", firstname: "Molly", lastname: "Bergstrom", pic:"./img/dray.jpg", contact:"5103568868")
yui = User.create(username: "yuii", password: "password", firstname: "Yui", lastname: "Ikeda", pic:"./img/dray.jpg", contact:"5103568868")
fiona = User.create(username: "fionap", password: "password", firstname: "Fiona", lastname: "Peck", pic:"./img/dray.jpg", contact:"5103568868")
paul = User.create(username: "pauly", password: "password", firstname: "Paul", lastname: "Yen", pic:"./img/dray.jpg", contact:"5103568868")
louise = User.create(username: "louiser", password: "password", firstname: "Louise", lastname: "Rafkin", pic:"./img/dray.jpg", contact:"5103568868")
phyllis = User.create(username: "phyllisr", password: "password", firstname: "Phyllis", lastname: "Ritchie", pic:"./img/dray.jpg", contact:"5103568868")

dray = Dog.create(name:"Draymond", age: 4, breed: "Norwich", about:"Draymond is the mayor of the Dog Pod. He is the smallest of all members, but he can befriend any dog and he's always happy. Maybe it's his PR effort but we love his sunny disposition, plus he's so handsome!", user_id:mio.id, pic:"./img/dray.jpg")
axel = Dog.create(name:"Axel", age: 6, breed: "PWD", about:"Axel is a gentle giant living next door to Dray. As the oldest member of the Dog Pod he is very patient with the young ones, just as long as they are neutered...", user_id:phyllis.id, pic:"./img/axel.jpg" )
mugi = Dog.create(name:"Mugi", age: 2, breed: "Pomeranian", about:"Although supposedly a toy breed, Mugi is tireless and can handle big hikes and wild wrestling matches. He's somehow bigger than Dray, although he would submit to any dog within seconds. He tend to gain weight easily so he's perpetually dieting.", user_id:yui.id, pic:"./img/mugi.jpg" )
rose = Dog.create(name:"Rose", age: 2, breed: "Schnoodle", about:"Rose was adopted when she was one year old. Her original family never had a dog and didn't know how to raise her. She's also a COVID dog...meaning she never went outside, never met anyone outside of her initial family, never met a dog...until her original family decided to rehome her after the pandemic. Because of the lack of socialization and stimulation for the first year of her life, she doesn't know how to interact with dogs so careful supervision is needed.", user_id:molly.id, pic:"./img/rose.png" )
stella = Dog.create(name:"Stella", age: 3, breed: "mutt", about:"Stella was found roaming around in Richmond, but it took the rescue org over a month before they successfully captured her due to her extremely flightful nature. She shows signs of abuse by her former owner, so careful not to raise your voice or make sudden movements. She gets along with most dogs, but Clover does not like her and attacked her so they cannot be together unattended.", user_id:aimee.id, pic:"./img/stella.jpg" )
clover = Dog.create(name:"Clover", age: 4, breed: "Jindo", about:"Clover was rescued in Korea. True to the general temperament of Jindo, she's aloof and does not warm up to you easily, but once she does she's quite goofy. She has a string prey drive, and any dog showing signs of fear triggers her to be aggressive.", user_id:fiona.id, pic:"./img/clover.png" )
flo = Dog.create(name:"Florence", age: 5, breed: "mutt", about:"Flo was rescued from a hoarding situation. When she was surrendered, she was living with 10+ other dogs in a tiny and unsanitary one bedroom apartment. She is very needy and clingy, but as long as you cuddle and pet her there's little else she needs.", user_id:louise.id, pic:"./img/flo.jpg" )
pawblo = Dog.create(name:"Pawblo", age: 3, breed: "Husky-pitbull mix", about:"Although he's a rescue, Pawblo was born at the shelter and well cared for since the beginning. Thanks to that he's a very confident and happy boy who usually instigate the wild play time whenever the Dog Pod gathers.", user_id:paul.id, pic:"./img/pawblo.png" )

item1 = Item.create(name:"martingale collar", description: "red martingale collar. Size small (about 10-12 inches). Dray is too short and low to the ground and he keeps tripping over the loop. So it's not for him but hopefully someone can use it.", user_id:mio.id, pic:"./img/dray.jpg")
item2 = Item.create(name:"fine comb", description: "I thought I misplaced the one I had and bought another one. It's perfect for combing out burrs after hiking.", user_id:phyllis.id, pic:"./img/dray.jpg")
item3 = Item.create(name:"pee pads", description: "I don't think Axel would need this anymore. two unopened bags of disposable pee pads. Size medium (24x40). ", user_id:phyllis.id, pic:"./img/dray.jpg")
item4 = Item.create(name:"small harness", description: "It still fits Dray but he just doesn't like it. Dray's neck girth is 12 inches and the chest is 20 inches. I know most of your dogs are bigger than Dray but if you know someone who can use it let me know!", user_id:mio.id, pic:"./img/dray.jpg")
item5 = Item.create(name:"bitter apple spray", description: "Spray on to the stuff you don't want your dog to chew on. Didn't work on Mugi though. The manufacturer also says you can use it to stop bad behaviors.", user_id:yui.id, pic:"./img/dray.jpg")
item6 = Item.create(name:"soft nylon puppy collar", description: "Small soft nylon puppy collar in light blue. It's really for getting your dog used to the collar and nothing more. it's really frimsy so I wouldn't attach a leash and use it like a real collar.", user_id:yui.id, pic:"./img/dray.jpg")
item7 = Item.create(name:"puppy food", description: "I love Natural Balance food but bought a puppy formula by mistake. I hope someone can use it. It's chicken and rice flavor.", user_id:molly.id, pic:"./img/dray.jpg")
item8 = Item.create(name:"nylabone", description: "Rose would rather chew on my shoes. I thought if I get her something she's allowed to chew she'd leave my stuff alone but nope. It's a soft one so not for a power chewer. They might break it and swallow the bits.", user_id:molly.id, pic:"./img/dray.jpg")
item9 = Item.create(name:"mini tennis balls", description: "I won a dozen of them at an event. Unfortunately these don't have squeakers inside so Pawblo is not interested. Besides it's small so he might accidentally eat it.", user_id:paul.id, pic:"./img/dray.jpg")
item10 = Item.create(name:"halloween costume (bumblebee, small)", description: "Clover used this when she was a puppy. it's size medium so probably too big for Dray and Mugi, but might work for Stella, Flo, or Rose", user_id:fiona.id, pic:"./img/dray.jpg")
item11 = Item.create(name:"chunky sweater, large", description: "It says large but it's too small for Pawblo. I bought it at a post-christmas sale last year so it hasn't been used. it's off-white and got some snowflake patterns. It's Poly so you can toss it in a washer.", user_id:paul.id, pic:"./img/dray.jpg")
item12 = Item.create(name:"training clicker", description: "If anyone wants to try clicker training I got a clicker. I had some success with Clover but I don't think we'll continue.", user_id:fiona.id, pic:"./img/dray.jpg")
item13 = Item.create(name:"topical flea control", description: "I've switched to tablet type. These cover between 8 - 20lbs dogs. Still got 4 months supply in the box.", user_id:louise.id, pic:"./img/dray.jpg")
item14 = Item.create(name:"frisbee", description: "It's a competition-quality frisbee. It's got a few teeth marks on it but in good condition.", user_id:yui.id, pic:"./img/dray.jpg")
item15 = Item.create(name:"toothbrush", description: "This is a finger-sack type toothbrush. it's very soft so good for massaging gums, or for getting a puppy used to toothbrush too. ", user_id:aimee.id, pic:"./img/dray.jpg")
item16 = Item.create(name:"dog cookie cutter (bone-shaped)", description: "If you are inspired to bake some home-made dog biscuits, I got a bone-shaped cookie cutter. I got it as a gift but I'd never bake cookies for my dog.", user_id:louise.id, pic:"./img/dray.jpg")

tag1 = Tag.create(category:"walking")
tag2 = Tag.create(category:"food")
tag3 = Tag.create(category:"grooming")
tag4 = Tag.create(category:"puppy care")
tag5 = Tag.create(category:"play")

item_tags1 = ItemTag.create(item_id:item1.id, tag_id:tag4.id)
item_tags2 = ItemTag.create(item_id:item2.id, tag_id:tag3.id)
item_tags3 = ItemTag.create(item_id:item3.id, tag_id:tag4.id)
item_tags4 = ItemTag.create(item_id:item4.id, tag_id:tag1.id)
item_tags5 = ItemTag.create(item_id:item5.id, tag_id:tag4.id)
item_tags6 = ItemTag.create(item_id:item6.id, tag_id:tag1.id)
item_tags7 = ItemTag.create(item_id:item6.id, tag_id:tag1.id)
item_tags8 = ItemTag.create(item_id:item7.id, tag_id:tag2.id)
item_tags9 = ItemTag.create(item_id:item7.id, tag_id:tag4.id)
item_tags9 = ItemTag.create(item_id:item8.id, tag_id:tag5.id)
item_tags10 = ItemTag.create(item_id:item8.id, tag_id:tag4.id)
item_tags11 = ItemTag.create(item_id:item9.id, tag_id:tag4.id)
item_tags12 = ItemTag.create(item_id:item9.id, tag_id:tag5.id)
item_tags13 = ItemTag.create(item_id:item10.id, tag_id:tag1.id)
item_tags14 = ItemTag.create(item_id:item10.id, tag_id:tag5.id)
item_tags15 = ItemTag.create(item_id:item11.id, tag_id:tag1.id)
item_tags16 = ItemTag.create(item_id:item12.id, tag_id:tag1.id)
item_tags17 = ItemTag.create(item_id:item12.id, tag_id:tag4.id)
item_tags18 = ItemTag.create(item_id:item13.id, tag_id:tag3.id)
item_tags19 = ItemTag.create(item_id:item14.id, tag_id:tag5.id)
item_tags20 = ItemTag.create(item_id:item15.id, tag_id:tag3.id)
item_tags21 = ItemTag.create(item_id:item15.id, tag_id:tag4.id)
item_tags22 = ItemTag.create(item_id:item16.id, tag_id:tag2.id)
item_tags23 = ItemTag.create(item_id:item16.id, tag_id:tag4.id)

playdate1 = Playdate.create(when:"November 12th", howlong:"from 9 to noon-ish", user_id:aimee.id)
playdate2 = Playdate.create(when:"Any weekday afternoon so I can go to the city to run bunches of errands.", howlong:"about 3 hours", user_id:molly.id)
playdate3 = Playdate.create(when:"12/24-26th", howlong:"3 days, 2 nights", user_id:paul.id)
playdate4 = Playdate.create(when:"11/30 if I get selected for a jury duty", howlong:"not sure", user_id:louise.id)
playdate5 = Playdate.create(when:"12/13", howlong:"5p - 10:30", user_id:phyllis.id)
playdate6 = Playdate.create(when:"11/4", howlong:"all day", user_id:phyllis.id)
playdate7 = Playdate.create(when:"4 Mondays starting 11/21 while I'm in classes", howlong:"8am-4pm", user_id:yui.id)
playdate8 = Playdate.create(when:"12/28-1/1", howlong:"while I'm visiting my daughers", user_id:aimee.id)
playdate9 = Playdate.create(when:"11/5", howlong:"noon - 9pm", user_id:fiona.id)
playdate10 = Playdate.create(when:"November 18th", howlong:"about 4 hours", user_id:louise.id)