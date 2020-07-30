import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="img img2">
              <div className="p">
                <div className="platzi p">
                  <h1 className="j color ci">PLATZI</h1>
                </div>
              </div>

              <div className="h1 conta">
                <h1 className="color co">PRINT YOUR BADGES</h1>
                <p className="color con">
                  "The easiest way to manage your conference".
                </p>
                <div className="l conta">
                  <Link to="/badges/new" className="btn btn-primary cont">
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
