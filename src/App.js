import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./palces/pages/NewPlace";
import { MainNavigation } from "./shared/components/Navigation/MainNavigation";
import { UserPlaces } from "./palces/pages/UserPlaces";

function App() {
  return (
    <Router>
      <main>
        <MainNavigation />
        <Switch>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
