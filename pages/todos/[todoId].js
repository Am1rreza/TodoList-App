import Link from "next/link";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className=" w-full bg-white shadow-sm flex justify-center py-4 mb-6">
        <h1 className="font-bold">TodoList App using Next.js</h1>
      </nav>
      <div className="container p-4 xl:max-w-screen-xl mx-auto">
        <section className="bg-white rounded-md p-4 shadow">
          <h1 className="text-2xl mb-4 font-semibold">Todo Detail Page</h1>
          <p className="mb-2">
            <span className="font-semibold">Todo Title:</span> {todo.title}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Todo Description:</span>{" "}
            {todo.description}
          </p>
          <Link href={"/"} className="text-blue-500 font-semibold">
            Back to Home Page?
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
