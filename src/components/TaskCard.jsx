import { useState } from "react";
import styles from "./styles/taskCard.module.css";

function TaskCard({ task, onEdit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}>
      <h3 className={styles.title}>{task.name}</h3>
      <p className={styles.date}>Due Date: {task.date}</p>
      <p className={styles.description}>
        {isExpanded ? task.desc : `${task.desc.slice(0, 100)}...`}
        {task.desc.length > 100 && (
          <span onClick={toggleExpand} className={styles.readMore}>
            {isExpanded ? " Show Less" : " Read More"}
          </span>
        )}
      </p>
      <div className={styles.buttonGroup}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
