import { useState } from "react";
import Task from "./Task";

const ToDoList = () => {
  const [tasks, setTask] = useState([
    { name: "寝る" },
    { name: "朝食" },
    { name: "洗濯" },
  ]);
  const [taskName, setTaskName] = useState("");

  return (
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.name}>
              <Task name={item.name} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="taskName">
          やること:
          <input
            type="text"
            id="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </label>
        <button
          onClick={() => {
            setTask((tasks) => [...tasks, { name: taskName }]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
