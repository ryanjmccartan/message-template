This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Message Template App

This is a messaging template app that allows a user to select a guest and company to construct a message with the templates provided. For this initial version, I wanted to accomplish the goal of working with the right guest and company data to populate the templates, so I kept it simple by allowing the user to only select those options from the data provided.

## Built With
​
* JavaScript - I chose JavaScript because it's what I have the most experience with.
* React.js - I used the React framework because I enjoy working with its componentization and state management, and it makes it easier for me to conceptualize how I'm handling the data.

for a full list of dependencies, please see the package.json file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
​
- [Node.js](https://nodejs.org/en/)

### Installing

* Open a new terminal window
* Navigate to the project directory path
* Run `npm install`
* In a terminal window, type `npm start`
* Navigate to `localhost:3000`

### Verification
* To make sure the program was working as intended, I first used console logs and conditional statements to determine I was accessing the appropriate data, and then I tested the message output by displaying it on the DOM and toggling between the different parameters, cross-referencing with my data to make sure everything lined up correctly.

### Next Steps
* In the next version, I'd like to future-proof the templates by creating a regex that dynamically substitutes words in the message besides simply hardcoding which ones to replace.
* I'd also like to implement the option for a user to add in their own templates.