import Layout from "@/containers/Layout/Layout";
import Link from "next/link";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  return (
    <Layout>
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
    </Layout>
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
