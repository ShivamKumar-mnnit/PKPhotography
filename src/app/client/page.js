"use client";
import React from "react";
import Landing from "../../components/client/Landing";
import UserCard from "../../components/client/UserCard";
import AdminDashboard from '../../components/client/Admin/AdminDashboard';
import "../globals.css"; 

const Home = () => {
  return (
    <>
      <Landing />
      <UserCard />
    </>
  );
};

export default Home;
