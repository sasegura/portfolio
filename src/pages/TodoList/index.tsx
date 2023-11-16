import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { Todo } from "./interfaces";
import { AddForm } from "./components/AddForm";
import TodoItem from "./components/TodoItem";
import { useAction, useAppSelector } from "./hooks/useAction";
import { Provider } from "react-redux";
import store from "./store";
import PagesLayout from "../../components/Page";

function Todos() {
  const todos = useAppSelector((state: any) => state.todo.todos);

  const { handleTodoToogle, handleTodoDone } = useAction();

  return (
    <Box sx={{ padding: "10px", margin: "0 auto", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <AddForm />
      </Box>
      <TableContainer component={Paper}>
        {todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              toogle={todo.toogle}
              onCheck={handleTodoToogle}
              onDelete={handleTodoDone}
            />
          ))
        ) : (
          <p>No to-do item</p>
        )}
      </TableContainer>
    </Box>
  );
}

function TodosList() {
  return (
    <Provider store={store}>
      <PagesLayout
        title={"Todo List with Redux Toolkit"}
        text={
          "Gestión de tareas con edux Toolkit como gestor de estado global."
        }
      >
        <Todos />
      </PagesLayout>
    </Provider>
  );
}

export default TodosList;
