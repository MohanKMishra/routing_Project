import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import PageOne from './Component/PageOne';
import PageTwo from './Component/PageTwo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Mainpage/> */}
      {/* <PageOne/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <PageTwo />
          </Route>
          <Route exact path="/pageOne">
            <PageOne />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
