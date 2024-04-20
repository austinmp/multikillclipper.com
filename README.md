# Deployment Procedure  / Developing Locally
This repository stores the raw front end code for [multikillclipper.com](https://www.multikillclipper.com/).This is not the compiled code that is served via GitHub pages, the compiled code can be found in [this repo](https://github.com/austinmp/multi-kill-clipper/tree/gh-pages). Since [multikillclipper.com](https://www.multikillclipper.com/) is hosted using GitHub pages there's a few extra steps we need to take to take to compile and deploy this code base.

* We're using the `gh-pages` npm package in order to deploy the create-react-app front end to a GitHub pages website [full details here](https://github.com/tschaub/gh-pages).

## To save the raw react changes and deploy the changes to multikillclipper.com follow these steps:
1. Make sure both remotes are added locally (multi-kill-clipper and multikillclipper.com):

Running `git remote - v` should produce something like this
```
multikillclipper.com    https://github.com/austinmp/multikillclipper.com.git (fetch)
multikillclipper.com    https://github.com/austinmp/multikillclipper.com.git (push) 
origin  https://github.com/austinmp/multi-kill-clipper.git (fetch)
origin  https://github.com/austinmp/multi-kill-clipper.git (push)
```

2. Save raw react changes by pushing them to this repo
```
git add .
git commit -m 'save react changes to multikillclipper.com repo'
git push multikillclipper.com main
```

3. Run the deployment script. This will automatically compile the react changes and push them to [this repo](https://github.com/austinmp/multi-kill-clipper/tree/gh-pages)
``` 
git branch --set-upstream-to=origin/gh-pages main     (main = local branch)    
npm run deploy
npm run deploy -- -m "Deploy React app to GitHub Pages"
```

4. Once the script has completed switch back upstream to track this repo
```
git branch --set-upstream-to=multikillclipper.com/main main 
```

5. Check [multikillclipper.com](https://www.multikillclipper.com/) to make sure changes have been deployed


## Note: Anything in the `public/` folder will be copied over directly when deploying (useful for images and other website assets)
>>>>>>> cb8ea8d948c09add4fb886224a447c02bfc8bc72


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
