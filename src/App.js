import { Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Map from "./pages/map/map";
import UpdateClinic from './pages/updateClinic/UpdateClinic';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/map"
          component={Map}
        />
         <Route
          exact
          path="/update/clinic/:id"
          component={UpdateClinic}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
