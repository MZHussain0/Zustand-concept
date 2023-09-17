import { useStores } from "../../store";
import "./task.css";
import classNames from "classnames";

export default function Task({ title }) {
  const task = useStores((store) =>
    store.tasks.find((task) => task.title === title)
  );

  return (
    <div className="task">
      <div className="">{task.title}</div>
      <div className="bottomWrapper">
        <div className=""></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
