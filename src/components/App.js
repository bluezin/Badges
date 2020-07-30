import React from "react";
import Badges from "../pages/Badges";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal.js";
import Layout from "./Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import PaginaEdit from '../pages/PaginaEdit'
import PaginaDetailits from '../pages/PaginaDetailitsContainer'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={PaginaPrincipal}></Route>
          <Route exact path="/badges/:badgeId/edit" component={PaginaEdit}></Route>
          <Route exact path="/badges/:badgeId" component={PaginaDetailits}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from="*" to="/404"></Redirect>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
