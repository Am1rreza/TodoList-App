import { getOneTodo } from "@/pages/api/todos/[todoId]";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const TodoEditPage = ({ todo }) => {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState(todo.isCompleted);
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });

  // Handlers
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`/api/todos/${router.query.todoId}`, {
        todo: { ...formData, isCompleted: isCheck },
      })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js</h1>
      </nav>
      <div className="container p-4 xl:max-w-screen-xl mx-auto">
        <section className="bg-white rounded-md shadow">
          <h1 className="text-2xl font-semibold p-4 pb-0">Todo Edit Page</h1>
          <form
            onSubmit={submitHandler}
            className="w-full max-screen-w-md bg-white p-4 rounded-xl"
          >
            <div className="mb-4">
              <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
                Title
              </label>
              <input
                name="title"
                placeholder="Todo title..."
                id="todo-title"
                className="border px-3 py-2 rounded-md outline-none appearance-none focus:ring-2 focus:ring-blue-400 w-full block transition duration-200 ease-out"
                type="text"
                value={formData.title}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-600 mb-1 block"
                htmlFor="todo-description"
              >
                Description
              </label>
              <textarea
                placeholder="Todo description..."
                value={formData.description}
                onChange={changeHandler}
                name="description"
                id="todo-description"
                className="border resize-none px-3 py-2 rounded-md outline-none appearance-none focus:ring-2 focus:ring-blue-400 w-full block transition duration-200 ease-out"
              ></textarea>
            </div>
            <div className="mb-8">
              <input
                type="checkbox"
                name="checked"
                id="checked"
                checked={isCheck}
                onChange={() => setIsCheck(!isCheck)}
                className="mr-2"
              />
              <label className="font-semibold" htmlFor="checked">
                Complete Todo
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => router.push("/")}
                type="button"
                className="w-full py-2 text-blue-500 border border-blue-500 rounded-lg  transition-all duration-300 ease-in-out"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
              >
                Update todo
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TodoEditPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
