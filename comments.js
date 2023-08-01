// Create web server
// Create a web server that will serve our files to the browser.
// Create a file called server.js.
// Add the following code to the file:
// const express = require('express');
// const app = express();
// 
// app.use(express.static('public'));
// 
// app.listen(3000, () => console.log('listening at 3000'));
// Run the server
// Run the server by typing the following command in the terminal:
// node server.js
// Open the browser and go to the following URL:
// http://localhost:3000/
// You should see the following:
// You can stop the server by going back to the terminal and pressing ctrl + c.
// Create a public folder
// Create a folder called public.
// Move all of the files and folders into the public folder.
// Update the server
// Update the server by adding the following code:
// app.use(express.static('public'));
// Run the server
// Run the server by typing the following command in the terminal:
// node server.js
// Open the browser and go to the following URL:
// http://localhost:3000/
// You should see the following:
// You can stop the server by going back to the terminal and pressing ctrl + c.
// Create the home page
// Create a file called index.html.
// Add the following code to the file:
// <!DOCTYPE html>
// <html lang="en">
// 
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Members</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// 
// <body>
//     <div class="container">
//         <div class="members">
//             <div class="member">
//                 <div class="member-image">
//                     <img src="images/member-1.jpg" alt="member">
//                 </div>
//                 <div class="member-info">
//                     <h3 class="member-name">John Doe</h3>
//                     <p class="member-title">Designer</p>
//                     <div class="skills">
//                         <p class="skills-title">Skills</p>
//                         <ul class="skills-list