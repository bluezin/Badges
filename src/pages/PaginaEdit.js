import React from "react";
import PrimeraFase from "../components/PrimeraFase";
import Form from "../components/Form";
import "./style/PaginaPrincipal.css";
import api from "../api";
import LoaderPage from "../components/LoaderPage";

class PaginaEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      twiter: "",
      job: "",
    },
  };
  componentDidMount() {
    this.fetchUpdate();
  }
  
  fetchUpdate = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        form: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleChange = (e) => {
    // const form2 = this.state.form
    // form2[e.target.name] = e.target.value
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    e.preventDefault();

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);

      this.props.history.push("/badges");
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <LoaderPage />;
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="padding col-6">
            <PrimeraFase
              firstName={this.state.form.firstName || "First_Name"}
              lastName={this.state.form.lastName || "Last_Name"}
              twiter={this.state.form.twiter || "Twitter"}
              email={this.state.form.email || "Email"}
              job={this.state.form.job || "JobTitle"}
              footer="#Platzi"
            />
          </div>
          <div className="col-5 padding">
            <h1>Edit Attendant</h1>
            <Form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              ValueOfForm={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaginaEdit;
