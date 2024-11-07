## Table of Contents
- [Introduction](#Introduction)
- [Tech Stack](#TeachStack)
- [Features](#Features)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [How to code it](#Howtocode)

## Introduction
This is our CP317 (Software Engineering) final project code.

## Tech Stack
**Frontend** 💻  
  -React.js is a Javascript library for web development. This will be used for our front end (UI/user side).  
**backend** 📑  
  -Amazon Web Services (AWS) NoSQL DynamoDB Database, called through API Gateway and returns data through Lambda.


## Features
| Feature       | Description                             |
|---------------|-----------------------------------------|
| **Renters create maintenance requests**      | Helping them reach their landlord effortlessly                  |
| **Landlord can easily see issues, marked by priority**  | streamlining what issues need to be fixed              |

## Usage
-Renters create maintenance requests and assign a priority based on the severity of the issue
-Landlords get to see a streamlined list of all property issues which require attention ordered from most to least urgent. This way landlords can easily see what issues need to be dealt with a

## Contributors

## How to code it
- Download the repo  
- In Visual Studio Code (ideal) open up a terminal and travel into the actual project file.
**Typically:** cd repair-mate
- After that you can launch the web server to see what the website looks like. This is done with this command
npm start (this should automatically open up your default web browser if it doesn't this should be the URL for the website http://localhost:3000/)

After that, all code for the website should be in the src file. Here there are multiple other folders.
| Folders       | Description                             |
|---------------|-----------------------------------------|
|Components|This is where all the React Components are stored. These are Javascript files. Think of every component as a Class in Java (overall think Object Oriented Design). These files are self-contained and have all the methods (functions) and variables they need inside of them to keep the main app code looking neat and tidy.|  
|Styles|This folder contains all CSS styling for their respective components. I recommend making a style file for each component but it's not required. These are .css files and contain style classes which are used in the Javascript components to make everything look pretty|  
|Model|This is our background data model. This way multiple components can access the same data and change their appearance based on it.|
