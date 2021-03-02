import React from 'react';
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector(state => state.user);
  return (
    <div>
      <h4>User Profile</h4>
      <h5>Email: {userInfo.email}</h5>
      <h5>Role: {userInfo.role}</h5>
    </div>
  );
}

export default Home;