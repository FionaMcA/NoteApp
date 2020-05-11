const styles = theme => ({
  root: {
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "200px"
  },
  newChatBtn: {
    borderRadius: "0px"
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px"
  },
  newNoteBtn: {
    width: "20%",
    height: "50px",
    borderBottom: "2px solid black",
    backgroundColor: "#ff0000",
    borderRadius: "30px",
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginTop: "30px",
    color: "white",
    "&:hover": {
      backgroundColor: "#ff0000"
    }
  },
  sidebarContainer: {
    marginTop: "0px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left"
  },
  newNoteInput: {
    width: "80%",
    margin: "0px",
    height: "50px",
    outline: "none",
    border: "none",
    top: 10,
    paddingLeft: "20px",
    "&:focus": {
      outline: "2px solid rgba(81, 203, 238, 1)"
    }
  },
  newNoteSubmitBtn: {
    width: "20%",
    height: "50px",
    borderBottom: "2px solid black",
    backgroundColor: "#ff0000",
    borderRadius: "30px",
    position: "absolute",
    bottom: 10,
    left: 15,
    color: "white",
    "&:hover": {
      backgroundColor: "#ff0000"
    }
  }
});

export default styles;
