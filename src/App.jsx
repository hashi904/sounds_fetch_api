import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { history } from './helpers/history'
import Header from './components/basic/Header/Index'
import AuthenticateMail from './containers/AuthenticateMail/Index'
import AuthenticateMailMessage from './containers/AuthenticateMailMessage/Index'
import SignIn from './containers/SignIn/Index'
import SignOut from './containers/SignOut/Index'
import UserShow from './containers/UserShow/Index'
import UserRegister from './containers/UserRegister/Index'
import UserUpdate from './containers/UserUpdate/Index'
import UsersIndex from './containers/UsersIndex/Index'
import UserDeleteComplete  from './containers/UserDeleteComplete/Index'
import UserDeleteConfirm from './containers/UserDeleteConfirm/Index'
import ChangeMail from './containers/ChangeMail/Index'
import ChangePassword from './containers/ChangePassword/Index'
import Contact from './containers/Contact/Index'
import Top from './containers/Top/Index'
import InternalError from './containers/Errors/500/Index'
import ChangeMailConfirm from './containers/ChangeMailConfirm/Index'
import SendGrid from './containers/SendGrid/Index'

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  // 未ログインだと見れないページ
  const PrivateRoute = ({ component, ...options }) => {
    if(isLoggedIn) {
      return <Route {...options} component={component} />

    } else {
      window.location.href = '/sign_in'
    }
  }

  // ログイン済みだと見れないページ
  const PublicRoute = ({ component, ...options }) => {
    if(!isLoggedIn) {
      return <Route {...options} component={component} />

    } else {
      window.location.href = '/users'
    }
  }

  return (
    <div>
      <BrowserRouter history={history}>
        <Route component={Header} />
        <Switch>
          <Route exact path='/top' component={Top} />
          <Route exact path='/user/detail/:id' component={UserShow} />
          <Route exact path='/user/register' component={UserRegister} />
          <Route exact path='/users' component={UsersIndex} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/change_mail_confirm' component={ChangeMailConfirm} />
          <Route exact path='/internal_error' component={InternalError} />
          <PublicRoute exact path='/auth_mail' component={AuthenticateMail} />
          <PublicRoute exact path='/auth_mail_sent' component={AuthenticateMailMessage} />
          <PublicRoute exact path='/sign_in' component={SignIn} />
          <PublicRoute exact path='/sign_out' component={SignOut} />
          <PrivateRoute exact path='/user/update' component={UserUpdate} />
          <PrivateRoute exact path='/change_mail' component={ChangeMail} />
          <PrivateRoute exact path='/change_password' component={ChangePassword} />
          <PrivateRoute exact path='/user/delete_confirm' component={UserDeleteConfirm} />
          <PublicRoute exact path='/user/delete_complete' component={UserDeleteComplete} />
          <Route exact path='/send_grid' component={SendGrid} />
          {isLoggedIn ? <Route  component={UsersIndex} /> : <Route  component={SignIn} />}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
