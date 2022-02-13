import React from "react";
import faker from "faker";

function CommentBox(props) {
  console.log(props);
  return (
      <div className="dec">
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={faker.image.image()}
          />
          <div className="header">{props.name}</div>
          <div className="meta">{props.location}</div>
          <div className="description">
            Jenny requested permission to view your contact details
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CommentBox;
