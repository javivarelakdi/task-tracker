import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem({ task }) {
  return (
    <div className={styles.itemWrapper}>
      <span>{task.name}</span>
      <span>{task.status}</span>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
