import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { editBlog, removeBlog } from "../actions/blogs";

// Blogforma Editblog formdan bir blog bilgisi aktariyor olucaz
const EditBlogPage = (props) => {
  // peki props parametresi icersine blog bilgisi nasil aktaricaz,
  //EditBlogPage e redux icerisinden gelen  secilen bir bilgi id si ile  redux icerisinden bir sorgulama yapicaz
  // vve bunla ilgili bilgiyi props parametresine aktaricaz
  // burda connect islemi yapiyor olmamiz lazim
  return (
    <div>
      <h1>Edit Page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(props.blog.id, blog));
          props.history.push("/blogs");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog({ id: props.blog.id }));
          props.history.push("/blogs");
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // burda ayni olan var ise direk blog icersiine aktarilicak bizde yukarida props.blog vasitasiyla buna ulasabilicez
    // ve bunu form icerisine aktaricaz.
    blog: state.blogs.find((b) => {
      // match ile route icersiindeki id bilgisine biz ulasabiliyorduk /edit/:id
      return b.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
