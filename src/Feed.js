import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      displayName: "きゅん",
      username: "@xxUCQxx",
      verified: true,
      text: "道重かわゆ〜",
      image:
        "https://64.media.tumblr.com/610ab4e5a949973e0f8618d421069a02/tumblr_naaj89JFtJ1t3c0tdo1_400.gif",
      avatar:
        "https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg"
    }
  ]);
  React.useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);
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
