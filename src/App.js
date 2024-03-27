import React, { useState } from "react";
import TaskList from "../src/components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: todo,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTodo("");
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8 ">Todo APP</h1>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center gap-4">
          <input
            className="w-full md:w-72 border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new task"
          />
          <button
            className="w-full md:w-auto px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
            onClick={addTodo}
          >
            Add Todo Item
          </button>
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;





