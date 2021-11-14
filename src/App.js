import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home/Home";
import Register from "./components/shared/Register/Register";
import Properties from "./components/homepage/Properties/Properties";
import Login from "./components/shared/Login/Login";
import Authprovider from "./context/Authprovider";
import PrivateRoute from "./components/shared/PrivateRoute/PrivateRoute";
import Dashboard from "./components/dashboardpage/Dashboard/Dashboard";
import MyProperties from "./components/dashboardpage/MyProperties/MyProperties";
import PropertyDetails from "./components/homepage/PropertyDetails/PropertyDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Authprovider>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/properties">
                <Properties></Properties>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/my-properties">
                <MyProperties></MyProperties>
              </PrivateRoute>
              <PrivateRoute path="/property-details/:id">
                <PropertyDetails></PropertyDetails>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
