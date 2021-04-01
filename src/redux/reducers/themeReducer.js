const initialState = {
  theme: 'dark'
}

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return {
        ...state,
        theme: 'dark' ? 'light' : 'dark'
      }
    default:
      return state
  }
}