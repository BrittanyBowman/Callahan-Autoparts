SEARCH page functionality needs to be created

AUTH Login needs to be created
-endpoints

Write a POST endpoint in your server for registering.
The endpoint should pull the username and password off of the body.
The endpoint create a new user in the database.
The endpoint should respond with the newly created user.
Write a method in Auth that sends an axios request to the endpoint you just wrote.
The axios request should take the username and password off of state and put them in the body of the request.
Once the response comes back, navigate to the Dashboard view.
Set up the 'Register' button to fire the method.
Write a POST endpoint in your server for logging in.
The endpoint should pull the username and password off of the body.
The endpoint should pull the user with the matching username and password out of the database.
The endpoint should respond with the user.
Write a method in Auth that sends an axios request to the endpoint you just wrote.
The axios request should take the username and password off of state and put them in the body of the request.
Once the response comes back, navigate to the Dashboard view.
Set up the 'Login' button to fire the method.
Step 3
Your users can now register and login, but your front end immediately forgets who just logged in. Let's fix that with Redux. First we will get Redux set up and sending values to the Nav component.

Open reducer.js and create an object called initialState. This object should store the username, id, and profile picture for your user.
Export a function named reducer. This function should take in two parameters: state (with the default value of initialState), and action.
Set up a switch statement inside the reducer based on the action type. For now just setup a default case that returns state.
Now open store.js and bring in createStore from redux and the reducer from reducer.js.
Create a store using the reducer you just brought in.
Export that store.
Open src/App.js and bring in the Provider from react-redux and the store from store.js.
Wrap the Provider component around the HashRouter component.
Pass the store to the Provider.
Go to Nav and bring in connect from react-redux.
Write the mapStateToProps function at the bottom of the file.
Take the username and profile picture off of the Redux state.
Now invoke connect, passing in mapStateToProps. Immediately invoke it again passing in the name of the component.
Now if you console.log props inside the Nav component you should see the values coming from the Redux state.
Set up the user profile picture and username to display. This will be pretty boring looking until we update these values in the next step
Step 4
Finally you will setup your Auth component to update Redux state.

In reducer.js write an action builder that takes in a parameter for the user id, username, and profile picture.
The function should return an action object with two properties: a type and a payload.
The type should be a string that describes what this action is supposed to do. These action type strings are usually stored in a constant outside the function.
The payload should be an object with a property for every parameter that was passed into the function.
The function should be exported.
In your reducer function, add a case to the switch statement.
The case should match the action type you just wrote.
This case should return an object with all the same properties you set in initialState.
The values of the object should be based on the values of the action payload.
In Auth, bring in connect from react-redux and the action builder you just wrote.
Invoke connect at the bottom.
Pass in null for the first argument. This is because we don't need to use any values from Redux state.
Pass in an object for the second argument. Add the action builder you just brought into Auth as a value to this object.
Now update both the register and login methods.
Once the user information has come back from the server, invoke the action builder and pass the information in.
The profile picture and username should now display in the navbar.