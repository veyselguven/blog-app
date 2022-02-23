import { createStore } from "redux";

//REDUCER
//Blogs
//auth=>username , isLogged
const counterReducer = (state = initialState, action) => {
  // console.log("store created");
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;

      return {
        count: state.count + incrementBy,
      };
    case "DECEREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};
const initialState = {
  count: 0,
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState()); // ne zaman dispatch action larsa state e o zaman calisir yani state uzerinde bir degisiklik oldugu
  // zaman calistirmasini istedigimiz zaman subscribe calisir
});

// getState
//console.log(store.getState());

// increament,decrement,reset=> action(state bilgisi uzerinde degisiklik yspamak istedigimiz tanimlayacagimiz obje)

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "RESET",
});
// store.dispatch({
//   type: "DECEREMENT",
// });

//console.log(store.getState());

//dispatch (leri actionla yolluyoruz verdigimiz talimat state icerisinde isleniyordu)

//reducers ise state ile birlikte bir action bilgisi gonderdigimiz zaman pakaetlemesi reducerlara kalmis,
// bir kactane reducer i alip store a gonderebiliyoruz
