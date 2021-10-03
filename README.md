# Social-Network-API
A social network application that allows users to post their thoughts, friends and other users can then share their reactions to thoughts and build their friends list. Built using MongoDB and Mongoose, alongside Express and Node, this application performs all necessary CRUD operations from posting thoughts, adding friends and reactions, all of these can be created, updated, and deleted.

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Installation
* MongoDB and Express must already be installed locally
* Locally clone the repository
* npm init from the terminal
* npm start to initiate the server in the terminal
* Install/open insomnia core
### Routing for Insomnia
* User Routes
   - GET all: localhost:3001/api/users
   - POST Add User: { "username: "testuser ", "email": "testuser@user.com"} localhost:3001/api/users
   - GET User by ID: localhost:3001/api/users/:id
   - PUT Update User: localhost:3001/api/users/:id
   - DELETE User: localhost:3001/api/users/:id
   - POST Add Friend:  localhost:3001/api/users/:id/friend/:friendId
   - DELETE Remove Friend: localhost:3001/api/users/:id/friends/:friendId
* Thought Routes
  - GET all: localhost:3001/api/thoughts
  - POST Thoughts: localhost:3001/api/thoughts
  - GET Thought By ID: localhost:3001/api/thoughts/:id
  - PUT update Thought: {"thoughtText": "I changed my mind, this is now my updated first thought now", "username": "test-user-4"} localhost:3001/api/thoughts/:id
  - DELETE thought: localhost:3001/api/thoughts/:id
* Reaction Route: 
  - POST reaction: localhost:3001/api/thoughts/:id/reactions 
  {
	"reactionBody": "Lorem Ipsum",
	"username": "user"
	}
  - DELETE reaction: localhost:3001/api/thoughts/:id/reactions/:reactionId

## Technologies
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose

## Video Walk-Through Link
* INTRO: https://watch.screencastify.com/v/ubqPBdaOx6RX9s33gvEz
* Insomnia Routing Video(s): https://watch.screencastify.com/v/DPLcVHw7TNFxirpu40R1


## Liscense
MIT

## Author:
Kevin Myers is a web developer in the North East Ohio area
Questions? kmyers25@gmail.com
