import React from "react";
import "./styles/PrimeraFase.css";
import conf from "../imagenes/logo.svg";
import Gravatar from "./Gravatar";

class PrimeraFase extends React.Component {
  //todo component requiere de un metodo render define el resultado de lo q se va aver en pamtalla
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={conf} alt="Logo" />
        </div>
        <div className="Badge_section-name grava">
          <Gravatar
            className="Badge_avatar"
            email={this.props.email}
            alt="gravatar"
          />

          <h1 className="font">
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge_section-info">
          <p>{this.props.job}</p>
          <p>{this.props.email}</p>
          <p>{this.props.twiter}</p>
        </div>

        <div className="Badge_footer">{this.props.footer}</div>
      </div>
    );
  }
}
export default PrimeraFase;
//empaqueta
