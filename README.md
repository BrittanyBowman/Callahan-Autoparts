COMPLETE button in wiz step3 needs to be setup
UPDATE button needs to be created
SEARCH button and capability needs to be created
REDUX needs to be setup

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