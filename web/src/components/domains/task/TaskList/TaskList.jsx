import styles from './TaskList.module.css';
import TaskItem from '../TaskItem/TaskItem';

/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

export function TaskList() {
  // create some task items here and return one task list for each item you have
  const taskItems = [
    {
      id: 1,
      title: 'Completar el componente TaskItem',
      description: 'Implementar la funcionalidad básica del componente',
      completed: false,
    },
    {
      id: 2,
      title: 'Desarrollar el componente TaskList',
      description: 'Crear un componente para mostrar múltiples tareas',
      completed: false,
    },
    {
      id: 3,
      title: 'Estilizar los componentes',
      description: 'Aplicar estilos CSS para mejorar la apariencia',
      completed: true,
    },
  ];

  return (
    <div className={styles.listWrapper}>
      <h2 className={styles.taskListTitle}>Mis Tareas</h2>
      <div className={styles.taskListContainer}>
        {taskItems.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
