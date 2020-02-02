import React, { useState } from "react";

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
      {resource}
    </div>
  );
}

export default App;
