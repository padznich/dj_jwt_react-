import React, { useState, useEffect } from "react";

import UserService from "../services/user_service";

const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {
          content.map(row => {
            return (
                <h3>{row.name}</h3>
            )
          })
        }
      </header>
    </div>
  );
};

export default Home;