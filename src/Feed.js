import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  React.useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>
      setPosts(
        snapshot.docs
          .map(doc => doc.data())
          .sort((a, b) => (a.date < b.date ? 1 : -1))
      )
    );
  }, []);
  const posts_copy = posts.slice();
  posts_copy.sort(function(a, b) {
    return a.date < b.date ? 1 : -1;
  });
  console.log(posts_copy);
  // setPosts(posts_copy);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map(post => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
};

export default Feed;
