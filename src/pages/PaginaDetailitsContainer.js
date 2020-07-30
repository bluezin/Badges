import React from "react";
import api from "../api";
import LoaderPage from "../components/LoaderPage";
import ErrorPage from "../components/ErrorPage";
import PaginaDetailits from "./PaginaDetailits";

class PaginaDetailitsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: [],
    isCloseOpen: false,
  };

  componentDidMount() {
    this.fetchDeta();
  }

  fetchDeta = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loading: false,
        error: null,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleClose = (e) => {
    this.setState({
      isCloseOpen: false,
    });
  };
  handleOpen = (e) => {
    this.setState({
      isCloseOpen: true,
    });
  };

  handleDelete = async()=>{
    this.setState({
      loading: true,
      error: null,
    })
    try{
      await api.badges.remove(
      this.props.match.params.badgeId
      )
      this.props.history.push("/badges")

      this.setState({
        loading:false,
      })
    }catch(error){
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  render() {
    if (this.state.loading) {
      return <LoaderPage />;
    }
    if (this.state.error) {
      return <ErrorPage error={this.state.error} />;
    }
    const badges = this.state.data;

    return (
      <PaginaDetailits
        onCloseModal={this.handleClose}
        onOpenModal={this.handleOpen}
        isCloseOpen={this.state.isCloseOpen}
        badges={badges}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default PaginaDetailitsContainer;
