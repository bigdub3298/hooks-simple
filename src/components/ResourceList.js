import React, { useState, useEffect } from "react";
import axios from "axios";

function ResourceList({ resource }) {
  const [resources, setResources] = useState([]);

  const fetchResource = resource => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(res => setResources(res.data));
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  const renderList = resources => {
    return resources.map(resource => <li>{resource.title}</li>);
  };

  return <ul>{renderList(resources)}</ul>;
}

export default ResourceList;
