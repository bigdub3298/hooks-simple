import React, { Component } from "react";

export class App extends Component {
  state = { resource: "posts" };

  onResourceChange = resource => {
    this.setState({ resource });
  };

  render() {
    return (
      <div className="ui container">
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => this.onResourceChange("posts")}
            className="ui button primary"
          >
            Posts
          </button>
          <button
            onClick={() => this.onResourceChange("todos")}
            className="ui button red"
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
