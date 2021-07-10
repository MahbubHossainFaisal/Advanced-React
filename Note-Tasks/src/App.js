import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);

  const transformTasks = taskObj => {
    const loadedTasks = [];

    for (const taskkey in taskObj) {
      loadedTasks.push({ id: taskkey, text: taskObj[taskkey].text });
    }

    setTasks(loadedTasks);
  }
  const { isLoading, error, sendRequest: fetchTasks } = useHttp(
    { url: 'https://add-task-6ed95-default-rtdb.firebaseio.com/tasks.json',  },
    transformTasks
  )

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
