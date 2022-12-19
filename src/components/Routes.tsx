import { Routes, Route } from 'react-router-dom';
import Information from './Information';
import Home from '../containers/Home';
import TodoList from '../containers/TodoList/TodoList';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  );
}
