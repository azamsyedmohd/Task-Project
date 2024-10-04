/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ tasks, setTasks }) => {
  const [day, setDay] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = {
      id: Math.floor(Math.random() * 100000),
      day: day,
      start: start,
      end: end,
    };
    const newTasks = [...tasks, value];
    console.log(newTasks);
    setTasks(newTasks);
  };
  return (
    <>
      <section className="flex flex-row gap-2">
        <form onSubmit={(event) => handleSubmit(event)}>
          <select value={day} onChange={(event) => setDay(event.target.value)}>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
          <input
            type="text"
            placeholder="Start-Date"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
          <input
            type="text"
            placeholder="End-Date"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </>
  );
};
export default Task;
