import React from "react";
import  ReactDOM  from "react-dom";
import CommentBox from "./CommentBox";
import Button from "./Button";
import "./styles.css";

const App = () =>{
    return(
        <>
        <Button>
        <CommentBox name="Jenny Lawrence" location="New user" />
        </Button>
        </>
    )
};


ReactDOM.render(
      <div>
      <App />
      </div>,
    document.getElementById("root")

);