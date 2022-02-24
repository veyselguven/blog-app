import React from "react";
import { Link } from "react-router-dom";
const BlogListItem = (props) => {
  console.log("bloglistItemprops", props);
  return (
    <>
      <li>
        {props.title} - <Link to={`/blogs/${props.id}`}>Details</Link>-{" "}
        <Link to={`/edit/${props.id}`}>Edit</Link>
      </li>
    </>
  );
};

export default BlogListItem;
