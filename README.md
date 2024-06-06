![Logo](./logo.png)

# Project Overview

This is a web application for managing UCLA's dance club: OFFBEAT SESSIONS. The applications allows club members to create user accounts with personalized profiles, view quarterly dance schedules, and search for each others profiles. The application distinguishes between club members and club administrators, allowing each to have different capabilities. Admins can update schedules and post announcements while members can RSVP to sessions.

## Features

1. User Accounts: Sign up, log in (differentiates between members and admins). Users can attach customizable data to their profile pages.
2. Home Page: Links for more information about the club, registering a new account, and logging in with an existing account.
3. Announcement Page: Admins can post announcement whihc can be viewed by other members.
4. Dynamic Schedule Page: Admins can create sessions, and members can view and RSVP to sessions.
5. Search Page: Allows users to look up other user profiles.
6. Profile Pages: Users can customize their profiles with profile pictures and text descriptions.
7. Navigation Bar: Redirects to various pages within the web application.

## Steps

1. Install and run a local instance of MongoDB Community Edition: https://www.mongodb.com/docs/manual/administration/install-community/ 
Don't forget to run MongoDB after installing it! For more details about running a local instance of MongoDB Community Edition, scroll below.
2. git clone https://github.com/ghapanda/MERN-MASTERMINDS.git
3. cd MERN-MASTERMINDS
4. Install dependencies:

```sh
npm install
npm run dev
```

Note: make sure you are in the root of the project (i.e :MERN-MASTERMIND directory) when you run these commands. Ignore warnings.

### For Linux and MacOS Users

To run our project on your OS, follow the instructions in the link above to install and run a local instance of MongoDB Community Edition.

### For Windows Users

The method we used to run our project on Windows OS was to use VSCode's MongoDB extension. However, you can also use the link above to install and run a local instance of MongoDB Community Edition.

To install MongoDB through VSCode:
1. Install the MongoDB extension named "MongoDB for VS Code".
2. Then, go to "https://cloud.mongodb.com/"
3. If you don't have a MongoDB cloud Atlas account, create one.
4. Otherwise, log in. Then, obtain a connection string.
5. In VSCode, open command palette via Ctrl-Shift-P or View -> Command Palette in the hot bar.
6. Enter MongoDB: Connect and input your connection string. (Other methods of connect may be used, but this is the one that we used.)
7. After connection, no further setup is needed. Use "npm run dev".

## Usage:

- "npm run dev" will run both client and server. MongoDB will run on port 27017 and the server will run on port 3002 by default.
- To access the application, open your browser and navigate to: http://localhost:3000
Note: make sure you are in the root of the project (i.e :MERN-MASTERMIND directory) when you run these commands. Ignore warnings.

## Common Issues and Troubleshooting:

Server Port:
By default, the server is running on port 3002. Hoever, this port may not be availbale on your machine. If you encouter an error like this "Something else is already running on port 3002" follow these steps:

1. In the root of the project, find the index.js file and modify this line according to the available ports on your machine: const PORT = process.env.PORT || 3002;
2. Go to client/src/components/portCongi.js and modify the SERVERPORT constant according to avaiable ports on your machine.

File Uploads:
Make sure the uploads folder exists in the root directory of the project for file uploads to work correctly.

Incompatible Plugins:
Some packages in package-lock.json and package.json may be incompatible with Windows. To fix this, delete package-lock.json, remove the offending packages from package.json, use npm install to reinstall any needed packages, and hope the project works XD. It worked when we tested it on a Windows 10 machine.

If you notice an error which says something like "onSignUpClick data attribute can't be read", this likely means your MongoDB connection was not set up correctly. Either because you did not install and run MongoDB correctly or because there is some incompatibility with your mongoose driver.

Missing/Outdated Dependencies:
1. If you encounter issues with missing dependencies, try reinstalling them. Common ones that might require uninstalling and reinstalling are the following.

```sh
npm uninstall axios
npm install axios

npm uninstall react-scripts
npm install react-scripts

npm uninstall @fortawesome/fontawesome-free
npm install @fortawesome/fontawesome-free

npm install express
npm install mongoose
```

2. If you encounter issues with outdated dependencies, try
```sh
npm outdated
```

to list the outdated packages and update them using
```sh
npm update <package_name>
```

Authors

    We made this app as a project for cs35L of Professor Paul Eggert in Spring 2024.
    Parnian, Srinjana, Vatsal, Masahiro and Cody.
