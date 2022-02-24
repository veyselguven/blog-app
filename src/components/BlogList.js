import React from "react";
import { connect } from "react-redux";

// bu componenetin gorevi react redux la baglanti kurmak

import BlogListItem from "./BlogListItem";
const BlogList = (props) => {
  console.log("bloglist props", props);
  return (
    <div>
      <ul>
        {props.blogs.map((blog) => {
          return <BlogListItem key={blog.id} {...blog} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};
// higher order component()
export default connect(mapStateToProps)(BlogList);
