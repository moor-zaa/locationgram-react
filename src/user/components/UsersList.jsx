import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.length === 0 ? (
        <div className="center">
          <Card>
            <h2>No Users Found!</h2>
          </Card>
        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
