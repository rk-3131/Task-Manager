import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
function App() {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    date: Date,
    done: false,
  });
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form task={task} setTask={setTask} list={list} setList={setList} />
      <TaskList task={task} setTask={setTask} list={list} setList={setList} />
      <Footer list={list} />
    </div>
  );
}

export default App;
