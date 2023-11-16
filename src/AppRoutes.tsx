import { Routes, Route } from "react-router-dom";
// import Information from "./Information";
// import Home from "../containers/Home";
// import TodoList from "../containers/TodoList/TodoList";
// import ReactQuery from "../containers/ReactQuery/reactQuery";
// import Products from "../containers/ShopCart/Products";
// import Cart from "../containers/ShopCart/Cart";
// import Login from "../containers/Login/Login";
// import Logout from "../containers/Logout/Logout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div></div>} />
      {/* <Route path="/portfolio" element={<Home />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/react-query" element={<ReactQuery />} />
      <Route path="/shop-cart" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/info" element={<Information />} /> */}
    </Routes>
  );
}
