import React from "react";
import conf from "../imagenes/logo.svg";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Nav1">
          <div className="container-fluid">
            <Link to="/">
              <img src={conf} alt="Logo" />
              <span className="font-weight-light">Conf </span>
              <span className="font-weight-bold">Platzi</span>
            </Link>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default Nav;
