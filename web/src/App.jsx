import { useState, useEffect } from 'react';
import { TaskList } from './components/domains/task/TaskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        if (!response.ok) {
          throw new Error('Error al obtener las tareas');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div>Cargando tareas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
