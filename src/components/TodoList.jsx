import { useState } from "react";

const TodoList = () => {
  const TASK_LIST = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
  ];

  const [todos, setTodos] = useState(TASK_LIST);

  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!task.trim()) return alert("할 일을 입력해 주세요.");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
    };

    setTodos([newTask, ...todos]);

    setTask("");
  };

  const inputBoxHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="todo-list">
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" value={task} onChange={inputBoxHandler} />
          <button type="submit">제출하기</button>
        </div>
        <div>
          {todos.map((n) => (
            <li key={n.id}>{n.text}</li>
          ))}
        </div>
      </form>
    </div>
  );
};
export default TodoList;
