import { useStores } from "../../store";
import { shallow } from "zustand/shallow";
import "./Column.css";
import Task from "./Task";
import { useState } from "react";
export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const tasks = useStores(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );

  const addTask = useStores((store) => store.addTask);
  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}

      {open && (
        <div className="modal">
          <div className="modalContent">
            <input
              type="text"
              placeholder="Title..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
