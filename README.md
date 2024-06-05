# Project Overview

This is a web application for managing a club with user accounts, dynamic schedules, personalized profiles, and search functionality. The application distinguishes between general members and admins, allowing each to have different capabilities. Admins can create events, while members can view and RSVP to events.

## Features
1) User Accounts: Sign up, log in, and differentiate between members and admins. Users can attach customizable data to their profile pages.
2) Landing Page: Links for more information about the club, creating a new account, and logging in with an existing account.
3) Dynamic Schedule Page: Admins can create events, and members can view and RSVP to events.
4) Search Function: Allows users to look up other club members.
5) Personalized Profile Pages: Users can customize their profiles with images, short videos, and text descriptions.
6) Navigation Bar: Redirects to various pages within the web application.

## Steps:

1) git clone https://github.com/ghapanda/MERN-MASTERMINDS.git
2) cd MERN-MASTERMINDS
3) Install dependencies:

npm install
npm install react-scripts
npm install @fortawesome/fontawesome-free
npm install axioS

### FOR WINDOWS USERS

The method we used to run our project on a Windows operating system was to use VSCode's MongoDB extension.

To install MongoDB through VSCode, first: 
1) Install the MongoDB extension named "MongoDB for VS Code".
2) Then, go to "https://cloud.mongodb.com/"
3) If you don't have a MongoDB cloud Atlas account, create one.
4) Otherwise, log in. Then, obtain a connection string.
5) In VSCode, open command palette via Ctrl-Shift-P or View -> Command Palette in the hot bar.
6) Enter MongoDB: Connect and input your connection string. (Other methods of connect may be used, but this is the one that we used.)
7) After connection, no further setup is needed. Use npm run dev!

## Usage:
Running the Application:
"npm run dev" will run both client and server.
To access the application, Open your browser and navigate to: http://localhost:3000
Server is running on port 3002.
Note: make sure you are in the root of the project (i.e :MERN-MASTERMIND directory) when you run these commands.

## Common Issues and Troubleshooting:

File Uploads:
Make sure the upload folder exists in the root directory of the project for file uploads to work correctly.

Incompatible Plugins:
Some packages in package-lock.json and package.json may be incompatible with Windows. To fix this, delete package-lock, remove the offending packages from package.json, use npm install to reinstall any needed packages, and hope the project works. It worked when we tested it on a Windows 10 machine.

Missing Dependencies:
If you encounter issues with missing dependencies, try reinstalling them:

npm uninstall axios
npm install axios
