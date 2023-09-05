import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from "./Notifications";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
