import React from "react";
import "./style/Badges.css";
import List from "../components/List";
import { Link } from "react-router-dom";
import api from "../api";
import ErrorPage from "../components/ErrorPage";
import LoaderPage from "../components/LoaderPage";
class Badges extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchList();
    //polling
    this.intervalId = setInterval(this.fetchList, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  fetchList = async () => {
    try {
      const data = await api.badges.list();
      this.setState({
        data: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  // constructor(props) {
  //   //inicializar la clase de component

  //   super(props);
  //   console.log("1. Constructor");
  //   this.state = {
  //     data: api,
  //   };
  // }

  // componentDidMount() {
  //   console.log("3.componentDidMount");
  //   this.timeoutId = setTimeout(() => {
  //     this.setState({
  //       data: [],
  //     });
  //   }, 3000);
  // }

  // componentDidUpdate(preProps, preState) {
  //   console.log("5.componentDidUpdate");
  //   console.log({
  //     preProps: preProps,
  //     preState: preState,
  //   });

  //   console.log({
  //     props: this.props,
  //     state: this.state,
  //   });
  // }
  // componentWillUnmount() {
  //   console.log("6.componentWillMount");
  //   clearTimeout(this.timeoutId);
  // }

  render() {
    if (this.state.loading === true) {
      return <LoaderPage />;
    }
    if (this.state.error) {
      return <ErrorPage error={this.state.error} />;
    }

    console.log("2/4.Render");
    return (
      <React.Fragment>
        <div className="container">
          <div className="boton">
            <Link to="/badges/new" className="btn btn-primary">
              Create Badges
            </Link>
          </div>
        </div>
        <div className="row">
          
          <div className="col-10">
            <List Listbadges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
