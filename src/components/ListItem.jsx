import { useState } from "react";
import styles from "./styles/item.module.css";

function ListItem({ item, list, setList, task, setTask }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = (item) => {
    setList(list.filter((todo) => todo !== item));
  };

  function handleComplete(item) {
    const newArray = list.map((el) =>
      el.name === item ? { ...el, done: !el.done } : el
    );
    setList(newArray);
  }

  function handleEdit(item) {
    setTask({
      name: item.name,
      desc: item.desc,
      date: item.date,
      done: item.done,
    });
    setList(list.filter((todo) => todo !== item));
  }

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const varClassName = item.done ? styles.lt : styles.ch;

  return (
    <div className={`${styles.item} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.itemName}>
        <div className={styles.title}>
          <span
            className={varClassName}
            onClick={() => {
              handleComplete(item.name);
            }}
          >
            {item.name}
          </span>
        </div>
        <div className={styles.details}>
          <div>
            <span className={styles.desc}>
              {isExpanded ? item.desc : `${item.desc.slice(0, 50)}...`}
              {item.desc.length > 50 && (
                <span onClick={toggleExpand} className={styles.readMore}>
                  {isExpanded ? " Show Less" : " Read More"}
                </span>
              )}
            </span>
          </div>
          <div>
            <span className={styles.date}>Due Date: {item.date}</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            handleEdit(item);
          }}
          className={styles.editButton}
        >
          Edit
        </button>

        <button
          onClick={() => {
            handleDelete(item);
          }}
          className={styles.deleteButton}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ListItem;
