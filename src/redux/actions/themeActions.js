


const themeActions = {
  changeMode: () => {
    console.log('cambia')
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: 'CHANGE_MODE',
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}

export default themeActions