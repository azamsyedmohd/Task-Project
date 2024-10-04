import TaskActions from "./TaskActions";
import AllTasks from "./AllTasks";
const TaskManager = () => {
  return (
    <>
      <section className="flex flex-col gap-12">
        <TaskActions />
        <AllTasks />
      </section>
    </>
  );
};
export default TaskManager;
