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

## Usage:
Running the Application:
"npm run dev" will run both client and server.
To access the application, Open your browser and navigate to: http://localhost:3000
Server is running on port 3002.
Note: make sure you are in the root of the project (i.e :MERN-MASTERMIND directory) when you run these commands.

## Common Issues and Troubleshooting:

File Uploads:
Make sure the upload folder exists in the root directory of the project for file uploads to work correctly.

Missing Dependencies:
If you encounter issues with missing dependencies, try reinstalling them:

npm uninstall axios
npm install axios
