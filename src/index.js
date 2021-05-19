import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null,
      long: null,
      errorMessage: null
    }
  }


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({
        lat: lat,
        long: long
      })
    },
      (err) => {
        console.log(err);
      }
    )
  }

  renderBody() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      )
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      )
    }
    return (
      <Loading message="Please accept location request"/>
    )
  }
  render() {
    return (
      <div className="border red">
        {this.renderBody()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))