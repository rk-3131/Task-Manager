import ListItem from "./ListItem";
import styles from "./styles/list.module.css";

function TaskList({ task, setTask, list, setList }) {
  const sortedList = list
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedList.map((todo) => (
        <ListItem
          item={todo}
          list={list}
          setList={setList}
          task={task}
          setTask={setTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
