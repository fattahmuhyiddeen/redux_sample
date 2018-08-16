const initialState = {
	name: 'Ali',
  age: 20
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.value}
    case 'CLEAR_NAME':
      return {...state, name: ''}
    default:
      return state
  }
}