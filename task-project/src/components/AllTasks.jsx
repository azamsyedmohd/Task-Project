/* eslint-disable react/prop-types */
import ShowTask from "./ShowTask";
const AllTasks = ({ tasks, setTasks }) => {
  return (
    <>
      <article>
        <p className="italic text-xl mb-6 text-blue-500">Showing All Tasks</p>
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
