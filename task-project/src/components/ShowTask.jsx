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
      <section className="flex md:flex-row flex-col gap-2 mb-5">
        <input
          type="text"
          value={task?.day}
          className="bg-gray-200 py-2 px-5 rounded-md"
        />
        <input
          type="text"
          value={task?.start}
          className="bg-gray-200 py-2 px-5 rounded-md"
        />
        <input
          type="text"
          value={task?.end}
          className="bg-gray-200 py-2 px-5 rounded-md"
        />
        <TiDelete
          onClick={() => handleDelete(task?.id)}
          className="w-12 h-12 hidden md:block"
        />
        <button className=" py-2 px-5 rounded-md block md:hidden bg-red-500 text-white">
          Delete{" "}
        </button>
      </section>
    </>
  );
};
export default ShowTask;
