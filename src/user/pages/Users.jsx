import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Morteza Alipour",
      places: 3,
      image:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    },
  ];

  return <UsersList users={USERS} />;
}
