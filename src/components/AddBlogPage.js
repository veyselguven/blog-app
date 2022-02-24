import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { addBlog } from "../actions/blogs";
// blog formda hazirlamis oldugumuz objeyi yani Obsubmit methodunu buraya aktaralim
// add blog page ile redux ile baglanti kuralim baglanti kurduktan sonra ilgili
//addBlog ismindeki action methodumuz araciligiyla ekleme islemini yapalim

const AddBlogPage = (props) => {
  return (
    <div>
      <h1>Add Blog</h1>
      <BlogForm
        onSubmit={(blog) => {
          props.dispatch(addBlog(blog));
          props.history.push("/blogs"); // router icersinde gelen methodlar da push methodu ile yonlendirme yapabiliyoruz
        }}
      />
    </div>
  );
};

export default connect()(AddBlogPage);
