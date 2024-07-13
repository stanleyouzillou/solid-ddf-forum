// src/components/PostList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css";

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>Popular</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>by {post.author}</p>
            <p>{post.content}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
