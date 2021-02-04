import './App.css';
import Luckysheet from './components/Luckysheet'
import { Home, Login, Register} from './pages'
import { Switch, Route } from 'react-router-dom';
import { loginguard } from './Utils'
import { GuardProvider, GuardedRoute } from 'react-router-guards';

function App() {
  return (
    <div className="App">
      <Luckysheet/>
      <GuardProvider guards={[loginguard]}>
        <Switch>
          <Route exact  path="register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <GuardedRoute exact path="/" component={Home}/>
        </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;
