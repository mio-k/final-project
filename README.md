# README

npm start --prefix client

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
  Renders the member dog information. Each dog's panel also shows their owner's name as the dog model and the user model have one to one relationship.

- Free items page
  The dog care items the members no longer need are offered here. It has search and filter by category feature. Also a form is avaialble to add more items.

- Playdates page
  This page lets you create and post your playdate requests, as well as accept requests.

## structure

![image info](./public/diagram.png)
