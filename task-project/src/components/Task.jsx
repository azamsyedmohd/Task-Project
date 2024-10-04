/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ tasks, setTasks, setOpen }) => {
  const [day, setDay] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = {
      id: Math.floor(Math.random() * 100000),
      day: day === null ? "Monday" : day,
      start: start,
      end: end,
    };
    const newTasks = [...tasks, value];
    console.log(newTasks);
    setTasks(newTasks);
    setOpen(false);
  };
  return (
    <>
      <section>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex md:flex-row flex-col gap-6"
        >
          <select
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className="bg-gray-200 py-2 px-5 rounded-md"
          >
            <option value="" disabled>
              Select a day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <input
            type="text"
            placeholder="Start-Date"
            value={start}
            onChange={(event) => setStart(event.target.value)}
            className="bg-gray-200 py-2 px-5 rounded-md"
          />
          <input
            type="text"
            placeholder="End-Date"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
            className="bg-gray-200 py-2 px-5 rounded-md"
          />
          <button type="submit" className="bg-gray-200 py-2 px-5 rounded-md">
            Add
          </button>
        </form>
      </section>
    </>
  );
};
export default Task;
