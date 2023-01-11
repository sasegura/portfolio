import { Routes, Route } from 'react-router-dom';
import Information from './Information';
import Home from '../containers/Home';
import TodoList from '../containers/TodoList/TodoList';
import ReactQuery from '../containers/ReactQuery/reactQuery';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Home />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/react-query" element={<ReactQuery />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  );
}
