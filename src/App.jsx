import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import { updateTaskTitleAction } from './actions/updateTaskTitle';
import { addTaskAction } from './actions/addTask';

export default function App() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitleAction(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTaskAction());
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />

  );
}
