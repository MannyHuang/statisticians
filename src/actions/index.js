export const selectPerson = person => {
  return {
    type: 'PERSON_SELECTED',
    payload: person
  };
};

export const displayPerson = person => {
  return {
    type: 'PERSON_DISPLAY',
    payload: person
  }
}