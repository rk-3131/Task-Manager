import styles from "./styles/form.module.css";

function Form({ task, setTask, list, setList }) {
  function afterSubmitFunction(e) {
    e.preventDefault();
    const isPresent = list.some((el) => el.name === task.name);
    if (isPresent) {
      setTask({ name: "", done: false });
      alert("Task already exist");
      return;
    }
    if (task.name === "" || task.name === null) {
      alert("Task can't be empty");
      return;
    }
    setList([...list, task]);
    setTask({ name: "", desc: "", date: Date, done: false });
    console.log(list);
  }
  return (
    <div className={styles.formDiv}>
      <form onSubmit={(e) => afterSubmitFunction(e)}>
        <div className={styles.firstgrp}>
          <div>
            <input
              className={styles.name}
              onChange={(e) => {
                setTask({ ...task, name: e.target.value, done: false });
              }}
              placeholder="Enter Title"
              type="text"
              value={task.name}
            />
          </div>
          <div>
            <input
              type="date"
              className={styles.date}
              placeholder="Enter due date"
              value={task.date}
              onChange={(e) => {
                setTask({ ...task, date: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <textarea
            className={styles.desc}
            placeholder="Enter description"
            value={task.desc}
            onChange={(e) => {
              setTask({ ...task, desc: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
