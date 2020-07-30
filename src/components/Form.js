import React from "react";
import "../pages/style/PaginaPrincipal.css";

class Form extends React.Component {
  state = {};
  // handleChange = (e) => {
  //   //  console.log({
  //   //    name: e.target.name,
  //   //    value: e.target.value})
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("button was submtted");
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("save susterful");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>First Name:</label>
            <input
              onChange={this.props.onChange}
              name="firstName"
              className="form-control"
              value={this.props.ValueOfForm.firstName}
            ></input>
          </div>

          <div>
            <label>LastName:</label>
            <input
              onChange={this.props.onChange}
              name="lastName"
              className="form-control"
              value={this.props.ValueOfForm.lastName}
            ></input>
          </div>
          <div>
            <label>JobTitle:</label>
            <input
              onChange={this.props.onChange}
              name="jobTitle"
              className="form-control"
              value={this.props.ValueOfForm.jobTitle}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              onChange={this.props.onChange}
              name="email"
              className="form-control"
              type="email"
              value={this.props.ValueOfForm.email}
            ></input>
          </div>
          <div>
            <label>Twiter:</label>
            <input
              onChange={this.props.onChange}
              name="twitter"
              className="form-control"
              value={this.props.ValueOfForm.twitter}
            ></input>
          </div>
          <br />
          <div>
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </div>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}
export default Form;
