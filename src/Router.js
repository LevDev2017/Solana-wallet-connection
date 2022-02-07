import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from './pages/Detail';


export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter> 
  )
}
