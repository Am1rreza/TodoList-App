import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import todo from "@/server/models/todo";
import axios from "axios";
import { useState } from "react";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);

  // Handlers
  const deleteTodo = async (id) => {
    await axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => alert(err));
  };

  const addTodo = async (formData) => {
    await axios
      .post("/api/todos", { formData })
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => alert(err));
  };

  const completeHandler = async (id) => {
    await axios
      .put(`/api/todos/complete/${id}`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js</h1>
      </nav>
      <div className="container p-4 xl:max-w-screen-xl mx-auto">
        <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col gap-y-8">
          <TodoForm onAdd={(formData) => addTodo(formData)} />
          <TodoList
            data={data}
            onDelete={deleteTodo}
            onComplete={completeHandler}
          />
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const todos = await todo.find({});

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
