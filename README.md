COMPLETE button in step 3 needs to be setup
UPDATE button needs to be created
SEARCH button and capability needs to be created
REDUX needs to be setup
## Step 2

Now you will get the Redux store set up and talking to a component.

* Open `store.js` and bring in `createStore` from `redux`. 
* Create an object called `initialState`. This object should store all the values entered in the wizard.
* Create a function named `reducer`. This function should take in two parameters: `state` (with the default value of `initialState`), and `action`.
* Set up a `switch` statement inside the `reducer` based on the action type. For now just setup a default case that returns state.
* Create and export a store using `createStore` and `reducer`.
* Go back to Step One and import `store` from `src/ducks/store.js`.
   * Create a variable called `reduxState` in the `constructor`. Set it's value to `.getState` invoked.
   * Use values from `reduxState` to set initial state for the component.
* Subscribe to the `store` inside of `componentDidMount`.
  * Use the `.subscribe` method.
  * Update local state using values from Redux state.

## Step 3

Then you will setup your Step One component to update Redux state.

* Open `store.js` and create and export an action type constant for Step One.
* In your `reducer` function, add a `case` to the `switch` statement. 
  * The `case` should match the action type you just wrote.
  * This `case` should return an object that includes all the values stored on `state`. The values for img, monthly mortgage, and desired rent should remain what they were, and the values for name, address, city, state, and zipcode should be updated based on the values of the action payload.
* In Step One, import the action type you created.
* Now setup the 'Next Step' button to update the `store` using the action type.
  * Use the `.dispatch` method. Pass in an object with a `type` and a `payload`.
  * The button should still navigate to the next step.

## Step 4

Now that you have Step One connected to Redux, you will replicate the process for steps two and three.

For both components:
* Import `store` from `store.js`.
* Create a variable called `reduxState` in the `constructor`. Set it's value to `.getState` invoked.
* Use values from `reduxState` to set initial state for the component.
* Subscribe to the `store` inside of `componentDidMount`.
  * Use the `.subscribe` method.
  * Update local state using values from Redux state.

## Step 5 

Then replicate the process of saving the values to Redux state for steps two and three.

For both components:
* Open `store.js` and create and export an action type constant.
* In your `reducer` function, add a `case` to the `switch` statement for each action type. 
  * The cases should return an object that includes all the values stored on state. The values added in other steps should remain what they were, and the values for the current step should be updated based on the values of the action payload.
* Import the coorisponding action type into the component.
* Now setup the buttons to update the `store` using the action type.
  * Use the `.dispatch` method. Pass in an object with a `type` and a `payload`.
  * The image URL should be saved to Redux when the 'Previous Step' or the 'Next Step' buttons are clicked in Step Two.
  * The monthly mortgage amount and the desired rent should be saved to Redux when the 'Previous Step' button is click in Step Three.
  * The buttons should still navigate correctly.
   
 
## Step 6

Now you will set up you cancel button to forget all values from the Wizard.

* Open `store.js` and create and export another action type constant.
* In your `reducer` function, add a `case` for the action type to the `switch` statement. 
  * The `case` should match the action type you just wrote.
  * The `case` should return an object. It should have all the properties of state, and the values should match what they were in the `initialState` object. 
* In Wizard, import the `store`.
* Set up the 'Cancel' button to clear Redux State. 
  * Use the `.dispatch` method. Pass in an object with the `type` you imported. This time you don't need a `payload`.
  * The button should still navigate correctly.
   
## Step 8

Finally you will update the ability to add a new house to use all these new values

* Change the sql file you wrote for your POST endpoint to accept additional parameters and insert them into the new columns you added.
* Update the POST endpoint to pull the additional values off of the body and pass them into the massive function.
* Open Step Three and update the method that saves a new house to the database.
   * The `axios` request should send all the values from all three steps on the body.
   * name, address, city, state, zipcode, and the image URL should be pulled from Redux, but the monthly mortgage amount and the desired rent should be pulled from local state.
   * This is because Redux is only updated when the navigation buttons are clicked, so on the final step the values stored in Redux may be out of date.
   * The method should invoke the action builder that clears the Redux state once the house has been added. Remember to bring the action builder in at the top of the file and add it to your connect function at the bottom.
   * The method should still navigate to the Dashboard once the house has been added.
* Lastly update the House component to display the additional values for each House.

<b>Congratulations! You've completed 27 competencies and built your second full-stack application!</b>

## Competencies
Competencies covered by this project

### Setup
["Student can use git to create, manage, and synchronize commits locally and remotely (Local and remote repository in-sync, .gitignore)"](https://github.com/DevMountain/simulation-2#database) </br>
["Student can use class based components in react and it's features (render, JSX, nested components)"](https://github.com/DevMountain/simulation-2#react) </br>
["Student can apply ES6 constructs in React for better code (import, export, destructuring)"](https://github.com/DevMountain/simulation-2#react) </br>
["Student can create Node servers using the Express package (Server running)"](https://github.com/DevMountain/simulation-2#server) </br>
["Student can create tables in a database"](https://github.com/DevMountain/simulation-2#database) </br>
["Student can connect to their database in their NodeJS servers using Massive"](https://github.com/DevMountain/simulation-2#database) </br>

### Part 1
<strong>Step 1</strong> </br>
["Student can add ReactRouter to their code base (HashRouter)"](https://github.com/DevMountain/simulation-2#step-1) </br>
["Student can add ReactRouter to their code base (Switch, Route, component)"](https://github.com/DevMountain/simulation-2#step-1) </br>
["Student can add ReactRouter to their code base (Link)"](https://github.com/DevMountain/simulation-2#step-1) </br>

<strong>Step 2</strong> </br>
["Student can use class based components in react and it's features (state, setState, constructors)"](https://github.com/DevMountain/simulation-2#step-2) </br>
["Student can use class based components in react and it's features (events)"](https://github.com/DevMountain/simulation-2#step-2) </br>
["Student can apply ES6 constructs in React for better code (arrow functions)"](https://github.com/DevMountain/simulation-2#step-2) </br>

<strong>Step 3</strong> </br>
["Student can use class based components in react and it's features (props)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can interact with the web via axios and REST"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can use componentDidMount in their code"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create a RESTful API (Status codes)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create a RESTful API (GET endpoint)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create SQL statements to manipulate data in their databases (Select)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can run SQL commands in their NodeJS servers using Massive"](https://github.com/DevMountain/simulation-2#step-3) </br>

<strong>Step 4</strong> </br>
["Student can create a RESTful API (express.json)"](https://github.com/DevMountain/simulation-2#step-4) </br>
["Student can create a RESTful API (POST endpoint)"](https://github.com/DevMountain/simulation-2#step-4) </br>
["Student can create SQL statements to manipulate data in their databases (Insert)"](https://github.com/DevMountain/simulation-2#step-4) </br>

<strong>Step 5</strong> </br>
["Student can use class based components in react and it's features (.bind)"](https://github.com/DevMountain/simulation-2#step-5) </br>
["Student can create a RESTful API (params)"](https://github.com/DevMountain/simulation-2#step-5) </br>
["Student can create a RESTful API (DELETE endpoint)"](https://github.com/DevMountain/simulation-2#step-5) </br>

### Part 2
<strong>Step 1</strong> </br>
["Student can alter existing tables in a database"](https://github.com/DevMountain/simulation-2#step-1-1) </br>
<strong>Step 2</strong> </br>
["Student can utilize Redux in their code to manage state (store, reducer)"](https://github.com/DevMountain/simulation-2#step-2-1) </br>

Don't worry too much about the competencies; they will be covered as you build this project.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>