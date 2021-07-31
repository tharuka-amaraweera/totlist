import React, { useState } from "react";
import "./App.css";
import Todo, { TodoInt } from "./components/Todo";

const App: React.FunctionComponent = () => {
  interface AllTodosInt {
    currentTodo: TodoInt;
    allTodos: Array<TodoInt>;
  }

  const [todoState, setTodoState] = useState<AllTodosInt>({
    currentTodo: {
      title: "",
      activeState: "",
      endDate: "",
      complete: false,
      deleteTodo: () => {},
      toggleTodo: () => {},
    },
    allTodos: [],
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoState({
      ...todoState,
      currentTodo: {
        ...todoState.currentTodo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setTodoState({
      currentTodo: {
        title: "",
        activeState: "",
        endDate: "",
        complete: false,
        deleteTodo: () => {},
        toggleTodo: () => {},
      },
      allTodos: [...todoState.allTodos, todoState.currentTodo],
    });
  };

  const toggleTodo = (index: number): void => {
    const filterTodo = todoState.allTodos.filter((todo, i) => {
      if (index == i) {
        todo.complete = !todo.complete;
      }
      return index == i;
    });
    setTodoState({
      ...todoState,
      currentTodo: filterTodo[0],
    });
    console.log(filterTodo);
  };
  const deleteHandler = (index: number): void => {
    const filterTodos = todoState.allTodos.filter((todo, i) => {
      return index !== i;
    });

    setTodoState({
      ...todoState,
      allTodos: filterTodos,
    });
    console.log(filterTodos);
  };

  const allTodos = todoState.allTodos.map((todo, i) => (
    <Todo
      key={i}
      title={todo.title}
      activeState={todo.activeState}
      endDate={todo.endDate}
      complete={todo.complete}
      deleteTodo={() => deleteHandler(i)}
      toggleTodo={() => toggleTodo(i)}
    />
  ));

  const clearValues = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setTodoState({
      ...todoState,
      currentTodo: {
        title: "",
        activeState: "",
        endDate: "",
        complete: false,
        deleteTodo: () => {},
        toggleTodo: () => {},
      },
    });
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={submitForm} className="card">
        <label htmlFor="todoTitle">Title:</label>
        <input
          className="textInput"
          required
          id="todoTitle"
          type="text"
          name="title"
          value={todoState.currentTodo.title}
          onChange={onChangeHandler}
        />

        <label htmlFor="todoActiveState">Active State:</label>
        <input
          className="textInput"
          required
          id="todoActiveState"
          type="text"
          name="activeState"
          value={todoState.currentTodo.activeState}
          onChange={onChangeHandler}
        />

        <label htmlFor="todoEndDate">End Date:</label>
        <input
          className="textInput"
          required
          id="todoEndDate"
          type="date"
          name="endDate"
          value={todoState.currentTodo.endDate}
          onChange={onChangeHandler}
        />

        <button className="submitButton" type="submit">
          Add Todo Item
        </button>
        <button className="clearButton" type="button" onClick={clearValues}>
          Clear
        </button>
      </form>
      {allTodos}
    </div>
  );
};

export default App;
