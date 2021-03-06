MERN 

Course provided by ACADEMIND - https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/

Official React Docs: https://reactjs.org/docs/getting-started.html

Official Node.js Docs: https://nodejs.org/en/docs/

Official Express.js Docs: https://expressjs.com/

Official MongoDB Docs: https://docs.mongodb.com/

M - Mongo DB - NOSQL database cwhich stores "Documents" in "collections" (Instead of "Records" in "tables" as in SQL)
E - Express - A Node Framework which simplifies writing Server-side code and logic. 
R - React JS - Client side (browser) library which allows you to build highly reactive user interactions 
N - Node JS - A server-side Runtime: JavaScript on the Server-side


This repo is made up of :-

Frontend :-
    a React SPA with react-router-dom, State management will be done with both hooks and Redux, Components and CSS 

BackEnd :- 
    Decoupled Ends - Backend API 
    REST :- Different URLs + HTTP Verbs (=endpoints) for different actions
    GET - get resource from server 
    POST - post a resource to the server (i.e create or append resource_)
    PUT - Put a resource onto the server (i.e create or overwrite a resource)
    PATCH - Update parts of an existing resource on the server 
    DELETE - Delete a resource on the server 
    OPTIONS :- Determine whether follow-up Request is allowed (sent automatically)

    GraphQL 
    One URL + http Verb (=one endpoint) that accepts query commands 
    - POST/graphql 
            example query 
            {
                query{
                    user{
                        name
                        age
                    }
                }
            }


Connecting Node + React 

1. Server Hosts Node API + React SPA 
    - Node (Express) API Handles incoming requests 
    - Requests not targeting API routes return React SPA 
    - Data is exchanged between React App and node API in JSON format 

2. Two Seperated Servers 
    Node (Express) API Handles incoming requests 
    - React SPA served from seperate static hosts 
    - Data is exchanged between Reat app and Node API in JSON format 

In both cases : Logically seperated Apps (SPA + API)! 

