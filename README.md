Description
##Group Showcase App
Welcome to the Node/Express group showcase challenge!

Yesterday, we covered Node modules. And today we’ve learned all about the magic of Express. We will be using all of these things, fun!

App Details
You'll be building an application that showcases you and your group member's lovely faces (or other appropriate images) and brief biographies. In addition, users of the app will be able to Like each bio if they find them pleasing. The following sections describe how we'd like you to proceed with creating this application.

Setup

Start a new Node project (i.e. use npm init and proceed as shown in lecture).
Install express with npm install express --save. Then, install body-parser in the same manner.
Create your server--using Express--in an app.js file. Use 3000 for your port.
Create a routes folder/directory to store your Express routes.
Create a public folder with subdirectories for views,assets, and scripts.
Create an images directory under the assets directory created in the previous step.
Place photos of each team member in the images directory.
Create a vendors directory under the assets directory and place a copy of minified jQuery in it.
Functionality

This page will be the first page that users see when they visit localhost:3000. When your website loads, we should see a page that displays a heading with your group's name.

Create the index.html file in your public/views directory. Serve this file from an Express route that responds to a GET request for the url /.

The rest of the page will be populated via AJAX calls to the server.

On page load, you will make two requests:

##Request 1

Make a GET request to a /bios route. This route will return an array of objects. You'll have as many objects as you have team members. Each object will include

the name of a team member
a 1-2 sentence bio of the team member
the relative url for the team member's image
Append each object's data to the DOM. And under each image include a Like button.

##Request 2

Make a GET request to a /likes route. This route will return an object. The object will have each team member's name as a property with their like count as a value.

##Like Button

When users click on the Like button, update a server route that keeps track of the number of likes received per person. For example, if you have a team member named Kris, you might have a server route that takes POST requests to the url /likes/kris. Thus, you'll need each button to trigger an AJAX call to each specific route. Upon success of your AJAX call, make another request to GET /likes to update the like count. Display this like count on, next to, or near the Like button.

Submission
Use the assignment app to to submit one repo URL per team member. Include each team member's name in the comments.
