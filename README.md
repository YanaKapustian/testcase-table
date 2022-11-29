# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

It's an application in React + Typescript. There is a table which loads data from the server using "Infinite Loader".\
The application has two pages - home page with '/' directory and form page with '/form' directory. I used react-router-dom npm package.

There are 5 columns:\
1. Full name (must consist of 2 words with at least 3 letter each. When the requirement is met, the full name is being formatted to have first letter of each word in uppercase and others in lowercase)\
2. Username (must start with @ and have at least 3 symbols)\
3. Email (must have the following structure: at least 3 letters, sign @, at least 2 letters, dot, from 2 to 3 letters)\
4. Phone (must have 10 digits, there is formatting as user is typing)\
5. City (must have at least 2 letters)\
If user doesn't type valid information, there will be messages saying what is wrong and form won't be submitted until every input is filled correctly. 

If we add a record successfully, we will see a green alert and inputs will be cleared. If there is an error, we will see a red alert saying that something went wrong.

I didn't use state manager, as the application is small and I fetch data only once.\
To fetch data I used fetch API (GET method) and axios (POST method).

For "Infinite Loader" I used useInfiniteScroll hook, whick is based on 'react-intersection-observer-hook'.

For styles, I used styled-components and CSS.

## Available Scripts

In the project directory, you can run:

### `json-server --watch db.json`

Start JSON Server.\
If you go to http://localhost:3000/table, you'll get the full information that is shown on the page.

The changes you make to the table will be automatically saved to `db.json`.\
More information is here https://github.com/typicode/json-server

### `npm start`

Runs the app in the development mode.\
As http://localhost:3000 is already being used for json-server, choose another port to run the app. For example, http://localhost:3001 \

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
