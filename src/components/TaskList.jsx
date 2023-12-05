import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ state, deleteTask }) => {
  return state.tasks.length <= 0
    ? "No task added yet!"
    : state.tasks.map((text) => (
        <ul key={text.id}>
          <TaskItem todo={text} deleteTask={deleteTask} />
        </ul>
      ));
};

export default TaskList;