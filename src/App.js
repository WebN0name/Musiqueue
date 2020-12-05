import './App.css';
import Home from './pages/Home'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/auth' component = {Auth}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
