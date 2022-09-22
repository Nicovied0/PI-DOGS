import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './Components/Home';
import Landing from './Components/LandingPage';
import Details from './Components/Details';
import AddDog from './Components/AddDog'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/dog' component={AddDog} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
