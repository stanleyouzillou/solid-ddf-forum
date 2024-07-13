// src/pages/HomePage.tsx
import React from "react";
import PostList from "../components/PostList";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <PostList />
    </div>
  );
};

export default HomePage;
