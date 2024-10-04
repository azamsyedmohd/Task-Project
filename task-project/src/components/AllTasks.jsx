/* eslint-disable react/prop-types */
import ShowTask from "./ShowTask";
const AllTasks = ({ tasks, setTasks }) => {
  return (
    <>
      <article>
        {tasks.map((task) => (
          <ShowTask
            task={task}
            key={task?.id}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </article>
    </>
  );
};
export default AllTasks;
