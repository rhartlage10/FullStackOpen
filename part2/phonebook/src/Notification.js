const Notification = ({ message, noError }) => {
    if (message === null) {
      return null
    }
  
    const noErrorStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    
    if (noError) {
        return (<div style={noErrorStyle}>{message}</div>)
    } else {
        return (<div style={errorStyle}>{message}</div>)
    }
    
  }

export default Notification