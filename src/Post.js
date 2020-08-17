import React from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image ? <img src={image} alt="" /> : null}
        <div className="post__footer">
          <IconButton>
            <ChatBubbleOutlineIcon
              fontSize="small"
              className="post__footerButton"
            />
          </IconButton>
          <IconButton>
            <RepeatIcon fontSize="small" className="post__footerButton" />
          </IconButton>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder fontSize="small" />}
                checkedIcon={<Favorite fontSize="small" />}
                name="checkedH"
              />
            }
          />

          <IconButton>
            <PublishIcon fontSize="small" className="post__footerButton" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
