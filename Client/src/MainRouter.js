import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BizDetails from "./BizDetails";
import RegisterBizForm from "./RegisterBizForm";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/BizDetails/:id">
          <BizDetails />
        </Route>
        <Route path="/RegisterBizForm/:cellPhone">
          <RegisterBizForm />
        </Route>
        <Route exact path="/">
          <BizDetails />
        </Route>
      </Switch>
    </Router>
  );
};
export default MainRouter;
