import React from "react";

const TaskList = ({ tasks, setTasks }) => {
  
  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
      
    }));
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-blue-600 uppercase font-semibold text-1xl m-8
      ">Task List</h1>
      {tasks.map((task) => (
        <div key={task.id} className="w-full md:w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-5">
            <li className={`list-none w-full md:w-2/3 text-left break-normal ${task.completed ? 'line-through' : ''}`}>{task.text}</li>
            <div className="flex gap-3 mt-3 md:mt-0">
              <button 
                className={`bg-blue-600 text-white px-2 py-2 font-medium rounded-md ${task.completed ? 'opacity-50 cursor-default' : ''}`}
                onClick={() => toggleCompleted(task.id)}
                disabled={task.completed}
              >
                {task.completed ? 'Completed' : 'Complete'}
              </button>
              <button 
                className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
