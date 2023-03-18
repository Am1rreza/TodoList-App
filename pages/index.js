import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setData(res.data.todos);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  // Handlers
  const deleteTodo = async (id) => {
    await axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => alert(err));
  };

  const addTodo = async (todoTitle) => {
    await axios
      .post("/api/todos", { todoTitle })
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => alert(err));
  };

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
          <h1 className="font-bold">TodoList App using Next.js</h1>
        </nav>
        <div className="container p-4 xl:max-w-screen-xl mx-auto">
          <section className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold">Let add some todos !</h2>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js</h1>
      </nav>
      <div className="container p-4 xl:max-w-screen-xl mx-auto">
        <section className="flex flex-col items-center justify-center">
          <TodoForm onAdd={( value) => addTodo( value)} />
          <TodoList data={data} onDelete={deleteTodo} />
        </section>
      </div>
    </div>
  );
}
