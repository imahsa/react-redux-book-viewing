export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an Action,
  //an object with a type property
  return {
    //All the actions need type
    //type always should be in this form(Uppercase and _ seperated)
    type: 'BOOK_SELECTED',
    //Payload is just more information the action that was taken
    payload: book
  };
}
