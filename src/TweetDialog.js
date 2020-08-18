import React, { useContext } from "react";
import "./TweetDialog.css";
import { User } from "./App";
import TweetBox from "./TweetBox";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Divider } from "@material-ui/core";

const TweetDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [account, setAccount] = useContext(User);
  return (
    <div>
      <Button
        variant="outlined"
        className="tweetDialog__tweet"
        fullWidth
        onClick={handleClickOpen}
      >
        Tweet
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="tweetDialog"
      >
        <DialogTitle>
          <div className="tweetDialog__header">
            <IconButton onClick={handleClose} className="tweetDialog__close">
              <CloseIcon />
            </IconButton>
            <Button className="tweetDialog__unsent">Unsent Tweets</Button>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <TweetBox onClick={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default TweetDialog;
