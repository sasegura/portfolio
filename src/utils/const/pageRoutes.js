import HomePage from "pages/Home";
import ReactQuery from "pages/ReactQuery";
import TodosList from "pages/TodoList";

export const pagesRoutes = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "ReactQuery", path: "/reactquery", element: <ReactQuery /> },
  { name: "TodosList", path: "/todolist", element: <TodosList /> },
];
