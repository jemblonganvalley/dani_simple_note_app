import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      {data.map((e) => (
        <div>
          <p>{e.email}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;
