import React from "react";

const BlogDetailsPage = (props) => {
  return <div>Blog Details :{props.match.params.id}</div>;
};

export default BlogDetailsPage;
