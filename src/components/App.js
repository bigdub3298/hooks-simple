import React, { useState } from "react";
import ResourceList from "./ResourceList";

function App() {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setResource("posts")}
          className="ui button primary"
        >
          Posts
        </button>
        <button
          onClick={() => setResource("todos")}
          className="ui button negative"
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
