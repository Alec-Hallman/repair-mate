## Table of Contents
- [Introduction](#Introduction)
- [Tech Stack](#TeachStack)
- [Features](#Features)
- [Usage](#Usage)
- [How to code it](#Howto)

## Introduction
This is our CP317 (Software Engineering) final project code.

## Tech Stack
**Frontend** 💻  
  -React.js is a Javascript library for web development. This will be used for our front end (UI/user side).  
**backend** 📑  
  -Amazon Web Services (AWS) NoSQL DynamoDB Database, called through API Gateway and returns data through Lambda.
  -Express.js a backend framework. Will handle HTTP requests and responsed, manage data, and implement logic for the server-side of the application


## Features
| Feature       | Description                             |
|---------------|-----------------------------------------|
| **Renters create maintenance requests**      | Helping them reach their landlord effortlessly                  |
| **Landlord can easily see issues, marked by priority**  | streamlining what issues need to be fixed              |

## Usage
-Renters create maintenance requests and assign a priority based on the severity of the issue
-Landlords get to see a streamlined list of all property issues which require attention ordered from most to least urgent. This way landlords can easily see what issues need to be dealt with a

## Howto
- Download the repo  
- In Visual Studio Code (ideal) open up a terminal and travel into the actual project file.
**Typically:** cd repair-mate
- After that you can launch the web server to see what the website looks like. This is done with this command
npm start (this should automatically open up your default web browser if it doesn't this should be the URL for the website http://localhost:3000/)

After that, all code for the website should be in the src file. Here there are multiple other folders.  

| Folders       | Description                             |
|---------------|-----------------------------------------|
|Components | This is where all the React Components are stored. These are Javascript files. Think of every component as a Class in Java (overall think Object Oriented Design). These files are self-contained and have all the methods (functions) and variables they need inside of them to keep the main app code looking neat and tidy. |  
| Styles |This folder contains all CSS styling for their respective components. I recommend making a style file for each component but it's not required. These are .css files and contain style classes which are used in the Javascript components to make everything look pretty|  
|Model|This is our background data model. This way multiple components can access the same data and change their appearance based on it.|

# The Wackiness of React  
React uses "hooks" to re-render the website whenever some variable is changed. The main hooks we'll use are:  
| Hook       | What it do                            |
|---------------|-----------------------------------------|
|useState | This hook is the main one to use if you need the website to reload when a variable is changed. This one will initiate an array with two things in it. The first thin is the actual variable and the second is a function which will change that variable and re-load the web page. |
|use context | This is the hook that will get info from our data models so you will set a variable to be equal to use context("Name of model")|  



Besides that, if you have any questions I would highly recommend using chatGPT, don't copy-paste from it but for learning how this stuff works it is extremely helpful. Or just send me a message.
