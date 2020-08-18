import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Avatar, IconButton } from "@material-ui/core";

import { User } from "./App";

const Sidebar = () => {
  const [account, setAccount] = useContext(User);
  const User1 = {
    displayName: "きゅん",
    username: "@xxUCQxx",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg"
  };
  const User2 = {
    displayName: "Donald J. Trump Fake",
    username: "@fakeDonaldTrump",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <IconButton
        className="sidebar__account"
        onClick={() => setAccount(User1)}
      >
        <Avatar src={User1.avatar} />
      </IconButton>
      <IconButton
        className="sidebar__account"
        onClick={() => setAccount(User2)}
      >
        <Avatar src={User2.avatar} />
      </IconButton>
    </div>
  );
};

export default Sidebar;
