const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
  }
//Action builders in redux. action objects, types, payloads. action type strings are usually stored in a constant outside the function.
const LOCATION_INFO = 'LOCATION_INFO';
const IMG_INFO = 'IMG_INFO';
const MONEY_INFO = 'MONEY_INFO';
const CLEAR_INFO = 'CLEAR_INFO';

//Switch statements: The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case LOCATION_INFO:
      return { ...state, ...payload };
    case IMG_INFO:
      return { ...state, img: payload };
    case MONEY_INFO:
      return { ...state, ...payload };
    case CLEAR_INFO:
      return payload;
    default:
      return state;
  }
}
//payload should be an object with a property for every parameter that was passed into the function.
export function updateLocation(locationObj) {
  return {
    type: LOCATION_INFO,
    payload: locationObj
  }
}

export function updateImg(imgUrl) {
  return {
    type: IMG_INFO,
    payload: imgUrl
  }
}

export function updateMoney(moneyObj) {
  return {
    type: MONEY_INFO,
    payload: moneyObj
  }
}

export function clear() {
  return {
    type: CLEAR_INFO,
    payload: initialState
  }
}

//In your reducer function, add a case to the switch statement. The case should make the action type you just wrote.
// This case should return an object that includes all the values stored on state. The values for img, monthly mortgage, and desired rent should remain what they were, and the values for name, address, city, state, and zipcode should be updated based on the values of the action payload.