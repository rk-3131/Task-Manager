import styles from "./styles/footer.module.css";

export default function Footer({ list }) {
  const taskCount = list.length;

  let count = list.filter((task) => task.done).length;

  return (
    <div className={styles.mainContainer}>
      <h3>Total Tasks: {taskCount}</h3>
      <h3>Completed Tasks: {count}</h3>
      <h3>Pending Tasks: {taskCount - count}</h3>
    </div>
  );
}
