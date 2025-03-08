import styles from './TaskList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import PropTypes from 'prop-types';
/*
/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

function TaskList({ tasks }) {
  return (
    <div className={styles.itemWrapper}>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TaskList;
