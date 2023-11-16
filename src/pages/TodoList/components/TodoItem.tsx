import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";

const TodoItem = (props: any) => {
  const deleteTodo = () => {
    props.onDelete(props.id);
  };

  const toogleTodo = () => {
    props.onCheck(props.id);
  };

  const label = { inputProps: { "aria-label": "checkbox" } };

  return (
    <Box>
      <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
        <Grid item xs={2}>
          <Checkbox
            {...label}
            checked={props.toogle}
            onChange={toogleTodo}
            role="checkbox"
          />
        </Grid>
        <Grid item xs={8}>
          <label>{props.text}</label>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            onClick={deleteTodo}
            aria-label="delete"
            sx={{ ml: 2 }}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoItem;
