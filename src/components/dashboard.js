import React, { useState, useEffect } from "react";
import Card from "./card";

const theAddress = "https://random-data-api.com/api/users/random_user?size=20";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(theAddress);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </ul>
  );
};

export default Dashboard;
