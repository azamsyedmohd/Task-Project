/* eslint-disable react/prop-types */
import { TiDelete } from "react-icons/ti";
const ShowTask = ({ task, setTasks, tasks }) => {
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task?.id !== id);
    console.log(filteredTasks);
    setTasks(filteredTasks);
  };
  return (
    <>
      <section className="flex flex-row gap-2">
        <input type="text" value={task?.day} />
        <input type="text" value={task?.start} />
        <input type="text" value={task?.end} />
        <TiDelete onClick={() => handleDelete(task?.id)} />
      </section>
    </>
  );
};
export default ShowTask;
