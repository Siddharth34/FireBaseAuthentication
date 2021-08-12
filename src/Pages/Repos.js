import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepo] = useState([]);

  const FeatchRepo = async () => {
    const { status, data } = await Axios.get(repos_url);
    console.log(data, " and status: ", status);
    setRepo(data);
  };

  useEffect(() => {
    FeatchRepo();
  }, [repos_url]);
  return (
    <>
      <ListGroup>
        {repos.map((repo) => {
          return (
            <ListGroupItem key={repo.id}>
              <div className="text-primary">{repo.name}</div>
              <div className="text-secondary">{repo.language}</div>
              <div className="text-info">{repo.description}</div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Repos;
