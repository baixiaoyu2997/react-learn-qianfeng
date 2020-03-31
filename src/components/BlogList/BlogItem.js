import React, { Component } from "react";

function BlogItem(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </li>
  );
}

export default BlogItem;
