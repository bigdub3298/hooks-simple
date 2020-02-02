import React, { Component } from "react";
import axios from "axios";

export class ResourceList extends Component {
  state = { resources: [] };
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      .then(res => this.setState({ resources: res.data }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        .then(res => this.setState({ resources: res.data }));
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
