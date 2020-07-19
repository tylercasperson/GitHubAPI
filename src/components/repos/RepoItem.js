import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <div className="grid-2">
        <h3>
          <a href={repo.html_url} className="text-dark">
            {repo.name}
          </a>
        </h3>
        <div>SSH: {repo.ssh_url}</div>
      </div>
      <div>Description: {repo.description}</div>
    </div>
  );
};

RepoItem.protoTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
