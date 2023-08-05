import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setAllTodos([...allTodos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(allTodos);
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={allTodos} setTodos={setAllTodos} />
    </div>
  );
};

export default App;
