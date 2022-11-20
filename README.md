# README

## What this is

Dog Pod Portal is Mio's personal project to showcase her learning. The app is set up using:

- React 17.0.2
- Ruby 2.7.4
- NodeJS(v16), and npm
- Postgresql
- AWS S3 bucket

## To start

- To start the backend, run rails s
- To start the frontend, run npm start --prefix client

## What it does

- Signup & login
  Dog Pod portal has a secure login feature. Passwords are hashed using bcrypt.

- Members page
  Renders the information of our users' dogs. Each dog's panel also shows their owner's name as the dog model and the user model have one to one relationship. If you are the owner of the dog, the Update and Delete buttons will be shown.

- Free items page
  The dog care items the members no longer need are offered here. Item components offers full CRUD feature. The page has a form to add more items. If you are the owner of the item, you will be the Update and Delete buttons. Each item can be tagged with mutliple categories, and you can use those categories to filter items. It also has a word search feature.

- Playdates page
  This page lets you create and post your playdate requests, as well as volunteer to host other members' dogs.

## Data structure

![image info](./public/diagram.png)
For the "implement one new technology" requirement, I added a file upload feature. An Amazon S3 bucket is configured to accept the images submitted from the item and dog forms.

Redux is implemented to handle all the state changes with the Items component.
