const styles = theme => ({
  root: {
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px"
  },
  titleInput: {
    boxSizing: "border-box",
    border: "black",
    padding: "10px",
    fontSize: "24px",
    width: "calc(100% - 300px)",
    borderRadius: "50px",
    borderBottom: "2px solid black",
    backgroundColor: "#ff0000",
    color: "white",
    paddingLeft: "60px"
  },
  editIcon: {
    position: "absolute",
    left: "330px",
    top: "20px",
    color: "white",
    width: "10",
    height: "10"
  },
  editorContainer: {
    height: "100%",
    paddingLeft: "20px",
    boxSizing: "border-box"
  }
});

export default styles;
