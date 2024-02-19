import React, { useReducer, useState } from 'react'
import { initialState, taskReducer } from './reducer'
import PagesLayout from 'components/Page'
import { Button, Grid, IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

const ReducerHook = () => {
  const [taskInput, setTaskInput] = useState('')
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: taskInput }
      })
      setTaskInput('')
    }
  }

  const handleRemoveTask = id => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  return (
    <PagesLayout
      title={'React useReducer Hook'}
      text={
        'If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful. The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.'
      }
    >
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={8} sm={8} md={10}>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={e => setTaskInput(e.target.value)}
            value={taskInput}
            placeholder="Add a new task"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={1}>
          <Button onClick={handleAddTask} variant="contained" endIcon={<AddIcon style={{ color: 'white' }} />}>
            <span style={{ color: 'white' }}>Add Task</span>
          </Button>
        </Grid>
      </Grid>

      {state.tasks.map(task => (
        <Grid key={task.id} container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
          <Grid item xs={8}>
            <label>{task.text}</label>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => handleRemoveTask(task.id)} aria-label="delete" sx={{ ml: 2 }} color="primary">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </PagesLayout>
  )
}

export default ReducerHook
