import TaskActions from "./TaskActions";
import AllTasks from "./AllTasks";
import { useState } from "react";
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <section className="flex flex-col gap-12 justify-center items-center w-full min-h-screen ">
        <TaskActions tasks={tasks} setTasks={setTasks} />
        <AllTasks tasks={tasks} setTasks={setTasks} />
      </section>
    </>
  );
};
export default TaskManager;
