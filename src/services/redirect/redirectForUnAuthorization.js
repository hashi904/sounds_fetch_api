import removeJwtFromLocalStrage from '../authenticate/removeJwtFromLocalStrage'

const redirectForUnAuthorization = (props) => {
  removeJwtFromLocalStrage()
  props.history.push('/users')
  window.location.reload()
}

export default redirectForUnAuthorization
