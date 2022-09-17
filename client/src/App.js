import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './Components/Home';
import Landing from './Components/LandingPage';
import Details from './Components/Details'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path={'/'} component={Landing} />
          <Route path={'/details:id'} component={Details} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
