import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/form";

import NewCard from "../components/newCard";

function ContactUs() {
  interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPostApi = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await result.json();
      console.log("response:", response);
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostApi();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Welcome to the ContactUs</h1>
      {posts.map((newcard) => (
        <NewCard
          key={newcard.id}
          userId={newcard.userId}
          id={newcard.id}
          title={newcard.title}
          body={newcard.body}
        />
      ))}
      {/* <Form /> */}
    </div>
  );
}

export default ContactUs;
