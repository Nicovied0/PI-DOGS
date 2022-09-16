import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './Components/Home';
import Landing from './Components/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path={'/'} component={Landing} />

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
