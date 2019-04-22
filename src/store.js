import { createStore } from 'redux';
import reducer from './reducer';

export default createStore( reducer );

//createStore allows us to keep track of data and pass it to the correct components via routing.
//When using redux, the store holds the entire state of our application.
//In redux, components need to connect to a store.
//createStore will allow us to export the creation of our store.
//In order to create our store, we'll also need our reducer.