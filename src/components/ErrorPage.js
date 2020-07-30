import React from "react";
import "./styles/ErrorPages.css";

class ErrorPages extends React.Component {
  render() {
    return (
      <div className="c text-center">
        <h1>{this.props.error.message}</h1>
      </div>
    );
  }
}

export default ErrorPages;
