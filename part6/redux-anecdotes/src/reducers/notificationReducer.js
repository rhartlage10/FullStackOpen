let timeID

const reducer = (state = '', action) => {
    switch(action.type) {
        case 'NOTIFY':
          return state = action.message
        case 'RESET':
            return state = ''
        default:
            return state
    }
  }
 
  const showNotification = (message) => {
    return {
      type: 'NOTIFY',
      message: message
    }
  }
  export const notify = (message, duration) => {
    return async dispatch => {
      if (timeID !== undefined) {
          clearTimeout(timeID)
      } 

      dispatch(showNotification(message))
 
      timeID = setTimeout(()=> {dispatch(reset())}, duration * 1000)
    }
  }

  export const reset = () => {
    return {
        type: 'RESET'
    }
  }
 
  export default reducer