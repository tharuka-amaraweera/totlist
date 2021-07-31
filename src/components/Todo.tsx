import React from "react";
import "./Todo.css";

export interface TodoInt {
  title: string;
  activeState: string;
  endDate: string;
  complete: boolean;
  deleteTodo: () => void;
  toggleTodo: () => void;
}

const Todo: React.FunctionComponent<TodoInt> = ({
  title,
  activeState,
  endDate,
  complete,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div className="card">
      <div className="row">
        <h2 className={complete ? "complete" : undefined}>Title:</h2>
        <p className={complete ? "complete" : undefined}>{title}</p>
      </div>
      <hr />

      <div className="row">
        <h2 className={complete ? "complete" : undefined}>Active State:</h2>
        <p className={complete ? "complete" : undefined}>{activeState}</p>
      </div>
      <hr />

      <div className="row">
        <h2 className={complete ? "complete" : undefined}>Date:</h2>
        <p className={complete ? "complete" : undefined}>{endDate}</p>
      </div>
      <button className="deleteBtn" onClick={deleteTodo}>
        Delete Todo Item
      </button>
      <br />
      <br />

      <label>Done</label>
      <input
        className="toggleCheck"
        type="checkbox"
        checked={complete}
        onChange={toggleTodo}
      />
    </div>
  );
};

export default Todo;
