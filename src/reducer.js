const initialState = {
    name: '',
    number: 0,
    price: 0,
    img: '',
    descrip: '',
    username: '',
    userid: 0

  }

//Action builders in redux. action objects, types, payloads. action type strings are usually stored in a constant outside the function.
const NAME_NUM_PRICE_INFO = 'NAME_NUM_PRICE_INFO';
const IMG_INFO = 'IMG_INFO';
const DESCRIP_INFO = 'DESCRIP_INFO';
const CLEAR_INFO = 'CLEAR_INFO';
const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

//Switch statements: The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.

export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case NAME_NUM_PRICE_INFO:
      return { ...state, ...payload };
    case IMG_INFO:
      return { ...state, img: payload };
    case DESCRIP_INFO:
      return { ...state, ...payload };
    case CLEAR_INFO:
      return payload;
      case UPDATE_USER:
      return { ...state, username: payload.username, userId: payload.id };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

//payload should be an object with a property for every parameter that was passed into the function.
export function updateNameNum(nameNumObj) {
  return {
    type: NAME_NUM_PRICE_INFO,
    payload: nameNumObj
  }
}

export function updateImg(imgUrl) {
  return {
    type: IMG_INFO,
    payload: imgUrl
  }
}

export function updateDescrip(descripObj) {
  return {
    type: DESCRIP_INFO,
    payload: descripObj
  }
}

export function clear() {
  return {
    type: CLEAR_INFO,
    payload: initialState
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
//In your reducer function, add a case to the switch statement. The case should make the action type you just wrote.
// This case should return an object that includes all the values stored on state.