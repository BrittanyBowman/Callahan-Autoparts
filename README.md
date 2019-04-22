PART 2 STEP 1 
# Part 2

<b>Live example [here](https://houser.devmountain.com/v2/part2/#/)</b>

In this part we will expand our Wizard to have three steps instead of just one.

Functionality of the Wizard:
* The Wizard should have three steps.
* A user should be able to navigate between the steps.
   * The inputs on each step should be remembered. If the user selects a previous step they should see the previously entered values.
   * It is acceptable to lose the values on refresh.
* In Step One:
   * A user should be able to add a name, address, city, state, and zipcode for a house.
   * A user should be able to click the 'Next Step' button to navigate to Step Two.
* In Step Two:
   * A user should be able to add an image URL.
   * A user should be able to click the 'Next Step' button to navigate to Step Three.
   * A user should be able to click the 'Previous Step' button to navigate to Step One.
* In Step Three:
   * A user should be able to add the monthly mortgage amount. 
      * This should populate a 'Recommended Rent' field. This amount should be 1.25 times the monthly mortgage amount.
   * A user should be able to add the desired monthly rent.
   * A user should be able to click the 'Complete' button.
      * This should add a new house with all of the form values to the database.
      * This should clear the inputs of the Wizard views.
      * This should redirect the user to the Dashboard.
        * _HINT:_ There is a method you can use to navigate. This will work better than a `Link` in this case.
* A user should be able to click the 'Cancel' button on any step.
    * This should NOT add a house to the database.
    * This should clear the inputs of the Wizard.
    * This should redirect the user to the Dashboard.
      * _HINT:_ There is a method you can use to navigate. This will work better than a `Link` in this case.


Functionality of the Dashboard View:
* A user should be able to see all the houses that have been added to the database.
* Each house should display its image, name, address, city, state, zipcode, montly mortgage, and desired rent information.
* A user should be able to click the 'Add New Property' button to be taken to the Wizard view.
* A user should be able to delete any single house.

## Design
Dashboard
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_dashboard.png" />
Wizard - Step One
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step1.png" />
Wizard - Step Two
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step2.png" />
Wizard - Step Three
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step3.png" />
 
## Step 1
In this step you will prepare your application to work with Redux.

* First, run `npm i redux`
* Use `SQLTabs` to connect to your database. Alter the houses table, adding colums for the image, monthly mortgage amount, and desired rent
  * _HINT:_ Save the SQL command for this to show your mentor later to earn some points.
* Create a file called `store.js` inside of `src`.
* Now create three components, one for each step.
* Your Wizard component has most of the functionality of Step One in it right now. Move state, the methods needed for the inputs to update state, and the input boxes from Wizard to Step One.
* Leave the 'Cancel' button in Wizard.
* Build the components for steps two and three to roughly match Step One. Just change the input boxes to be different for each view.
* Move the method that saves a house to the database and the 'Complete' button from Wizard to Step Three.
* Now Wizard should be mostly empty. We are going to use it to organize our new routes. 
   * Bring in `Route` from `react-router-dom`, and the three step components you just made.
   * Set up a route for each step. The path should look like '/wizard/step#' with the number matching each step. 
   * By setting up the routes for the steps inside Wizard instead of inside `routes.js` we keep our routing tree organized. 
* Now set up the navigation buttons in each step to flip through the steps. 
* Also go to the 'Add New Property' button in Dashboard and change it to navigate to '/wizard/step1' instead of '/wizard'

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