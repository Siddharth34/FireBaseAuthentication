import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import GitCard from "../Pages/GitCard";
import Repos from "../Pages/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQurey] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("User name is not found", { type: "error" });
    }
  };

  // !context.user?.uid ? <Redirect to="/SignIn" /> : null;

  if (!context.user?.uid) {
    return <Redirect to="/SignIn" />;
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQurey(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <GitCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
