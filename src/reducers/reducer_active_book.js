//Atate arg is not application state,
//only the state this reducer is responsible for
export default function ActiveBook (state = null, action) { //if the arg is undefined, set it null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

      break;
    default:

  }
  //base case
  return state
}
