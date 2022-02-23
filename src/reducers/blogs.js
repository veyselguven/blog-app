const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      console.log("addblogaction", action); //{type: 'ADD_BLOG', blog: {…}}
      console.log("addblogactiontype", action.blog); //{title: 'blog title 1', description: 'blog description 1', dateAdded: 0, id: ƒ}
      return [...state, action.blog];
    case "REMOVE_BLOG":
      console.log("remove", action);
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_BLOG":
      return state.map((blog) => {
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.updates,
          };
        } else {
          return blog;
        }
      });
    default:
      return state;
  }
};

export default blogReducer;
