/* eslint-disable react/prop-types */
import AddNew from "./AddNew";
import Clear from "./Clear";
import Task from "./Task";
import { useState } from "react";
const TaskActions = ({ tasks, setTasks }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="flex flex-row gap-6">
        <AddNew setOpen={setOpen} />
        <Clear setTasks={setTasks} />
      </section>
      {open && <Task tasks={tasks} setTasks={setTasks} />}
    </>
  );
};
export default TaskActions;
