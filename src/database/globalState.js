import { action, computed, createStore, thunk } from "easy-peasy";

export let globalState = createStore({
  // TOKEN AREA
  token: null,
  pushToken: action((state, payload) => {
    state.token = payload;
  }),
  setToken: thunk(async (act) => {
    let res = await fetch("https://atur.biar.pw/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    let data = await res.json();
    let ps = await act.pushToken(data.token);
  }),
  // END TOKEN AREA

  // For Save Change Text to Page Search
  todos: "",
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
  // END For Save Change Text to Page Search

  todos: [{ text: "", done: true }],
  completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),

  // constructor(props){
  //     super(props);
  //     this.md = new Remarkable();
  //     this.handleChange = this
  // }

  refresher: false,
  setRefresher: action((state, payload) => {
    state.refresher = !state.refresher;
  }),

  //Search panel
  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),

  quotesMedia: 3,
  setQuotesMedia: action((state, payload) => {
    state.quotesMedia = payload;
  }),

  navHeight: 0,
  setNavHeight: action((state, payload) => {
    state.navHeight = payload;
  }),
});
