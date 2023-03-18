import axios from "axios";
import { useEffect, useState } from "react";
import { HiCheck, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi2";

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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js</h1>
      </nav>
      <div className="container p-4 xl:max-w-screen-xl mx-auto">
        <section className="flex items-center justify-center">
          <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
            {data.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
                >
                  <span>{todo.title}</span>
                  <div className="flex gap-x-3 items-center">
                    <button className="">
                      <HiCheck className="w-6 h-6 text-green-400" />
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>
                      <HiOutlineTrash className="w-6 h-6 stroke-red-400" />
                    </button>
                    <button>
                      <HiOutlinePencil className="w-6 h-6 stroke-blue-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
