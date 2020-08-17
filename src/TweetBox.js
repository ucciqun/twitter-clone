import React, { useState, useContext } from "react";
import "./TweetBox.css";
import { Button, Avatar, IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import EventIcon from "@material-ui/icons/Event";

import db from "./firebase";

import { User } from "./App";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const [account, setAccount] = useContext(User);

  const sendTweet = e => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: account.displayName,
      username: account.username,
      verified: account.verified,
      text: tweetMessage,
      avatar: account.avatar,
      date: new Date()
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={account.avatar} />
          <div className="tweetBox__inputSpecial">
            <input
              onChange={e => setTweetMessage(e.target.value)}
              value={tweetMessage}
              type="text"
              placeholder="What's happening?"
            />
            <p></p>
            <div className="tweetBox__buttons">
              <IconButton className="tweetBox__button">
                <ImageIcon />
              </IconButton>
              <IconButton className="tweetBox__button">
                <GifIcon />
              </IconButton>
              <IconButton className="tweetBox__button">
                <EqualizerIcon />
              </IconButton>
              <IconButton className="tweetBox__button">
                <InsertEmoticonIcon />
              </IconButton>
              <IconButton className="tweetBox__button">
                <EventIcon />
              </IconButton>
              <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton"
              >
                Tweet
              </Button>
            </div>
          </div>
        </div>
        {/* <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        /> */}
      </form>
    </div>
  );
}

export default TweetBox;
