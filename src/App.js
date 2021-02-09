import './App.css';
import { Home, Login, Register, WorkPage} from './pages'
import { Switch, Route } from 'react-router-dom';
import { loginguard } from './Utils'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { Navbar } from './components'
import { isLoggedInVar } from './cache'

function App() {
  //check localstorage when the app start and put user status on cache
  if(localStorage.getItem('token')){
    isLoggedInVar(true)
  }
  return (
    <div>
      <Navbar/>
      <GuardProvider guards={[loginguard]}>
        <Switch>
          <Route exact  path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <GuardedRoute exact path="/" component={Home}/>
          <GuardedRoute exact path="/sheet/:id" component={WorkPage}/>
        </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;
