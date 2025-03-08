import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

export function TaskItem({ task }) {
  return (
    <div className={styles.itemWrapper}>
      <h3
        className={`${styles.itemTitle} ${task.completed ? styles.completed : ''}`}
      >
        {task.title}
      </h3>
      <p className={styles.itemDescription}>{task.description}</p>
      <span className={styles.status}>
        {task.completed ? 'Completed' : 'Pending'}
      </span>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
