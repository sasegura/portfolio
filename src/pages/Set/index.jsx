import React, { useReducer, useState } from 'react'
import { initialState, taskReducer } from './reducer'
import PagesLayout from 'components/Page'
import { Button, Grid, IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import SetOperations from './setsOperations'

const Form = ({ value, setValue, AddValue }) => {
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item sm={8} md={6}>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={e => setValue(e.target.value)}
          value={value}
          placeholder="Add a new task"
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item sm={4} md={6}>
        <Button onClick={AddValue} variant="contained" endIcon={<AddIcon style={{ color: 'white' }} />}>
          <span style={{ color: 'white' }}>Add To Set</span>
        </Button>
      </Grid>
    </Grid>
  )
}
const ShowData = ({ data, handleRemove }) => {
  return data.tasks.map(task => (
    <Grid key={task.id} container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
      <Grid item xs={8}>
        <label>{task.text}</label>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => handleRemove(task.id)} aria-label="delete" sx={{ ml: 2 }} color="primary">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  ))
}
const Set = () => {
  const [taskInputA, setTaskInputA] = useState('')
  const [stateA, dispatchA] = useReducer(taskReducer, initialState)
  const [taskInputB, setTaskInputB] = useState('')
  const [stateB, dispatchB] = useReducer(taskReducer, initialState)
  const handleAddTaskA = () => {
    if (taskInputA.trim() !== '') {
      dispatchA({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: taskInputA }
      })
      setTaskInputA('')
    }
  }

  const handleRemoveTaskA = id => {
    dispatchA({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  const handleAddTaskB = () => {
    if (taskInputB.trim() !== '') {
      dispatchB({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: taskInputB }
      })
      setTaskInputB('')
    }
  }

  const handleRemoveTaskB = id => {
    dispatchB({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  return (
    <PagesLayout
      title={'JavaScript Set'}
      text={
        'The Set object allows you to store unique values of any type, either primitive values or references to objects.'
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} md={6}>
          <Form value={taskInputA} setValue={setTaskInputA} AddValue={handleAddTaskA} />
          <ShowData data={stateA} handleRemove={handleRemoveTaskA} />
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <Form value={taskInputB} setValue={setTaskInputB} AddValue={handleAddTaskB} />
          <ShowData data={stateB} handleRemove={handleRemoveTaskB} />
        </Grid>
      </Grid>
      <Grid>{stateA && stateB && <SetOperations setA={stateA.tasks} setB={stateB.tasks} />}</Grid>
    </PagesLayout>
  )
}

export default Set
