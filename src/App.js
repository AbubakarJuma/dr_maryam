import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Admin/Dashboard";
import CustomerList from "./components/Admin/CustomerList";
import AddCustomer from "./components/Admin/AddCustomer";
import CustomerApplication from "./components/Admin/CustomerApplication";
import ApprovedApplication from "./components/Admin/ApprovedApplication";
import ModelForm from "./ModelForm";
import "./App.css";
import CanceledApplication from "./components/Admin/CanceledApplication";
import Navigation from "./components/Navigation";
import SecurityChange from "./components/Admin/SecurityChange";
import UpdateUser from "./components/Admin/UpdateUser";


import DashboardUser from "./components/Customer/Dashboard";
import Application from "./components/Customer/Application";
import AppList from "./components/Customer/AppList";
import SecurityChanges from "./components/Customer/SecurityChange";
import ViewApplication from "./components/Admin/ViewApplication";

import MultiStepForm from "./components/Customer/MultiStepForm";
import MyTable from "./MyTable";
import RegisterForm from "./RegisterForm";




const App = () => {
  return (
    <Router>
      <Switch>

        // admin components

        <Route exact path="/" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/customer" component={CustomerList} />
        <Route path="/addcustomer" component={AddCustomer} />
        <Route path="/application" component={CustomerApplication} />
        <Route path="/approve" component={ApprovedApplication} />
        <Route path="/cancel" component={CanceledApplication} />
        <Route path="/security" component={SecurityChange} />
        <Route path="/updateuser/:ownerID" component={UpdateUser} />

        // customer components

        <Route path="/user-dash" component={DashboardUser} />
        <Route path="/applssy" component={Application} />
        <Route path="/my-app-list" component={AppList} />
        <Route path="/applications/:appID" component={ViewApplication} />
        <Route path="/changes" component={SecurityChanges} />

        <Route path="/apply" component={MultiStepForm} />

        <Route path="/test" component={MyTable} />

        <Route path="/rgs" component={RegisterForm} />

        


      </Switch>
    </Router>
  );
};

export default App;
