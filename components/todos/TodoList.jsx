import { HiCheck, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi2";

const TodoList = ({ data, onDelete }) => {
  if (data.length === 0) {
    return (
      <section className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Let add some todos !</h2>
      </section>
    );
  }

  return (
    <div className="w-full max-w-screen-md bg-white p-4 pb-0 sm:pb-0 rounded-xl">
      {data.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex items-center justify-between gap-x-2 border border-gray-100 mb-4 p-3 rounded-md"
          >
            <span className="overflow-auto">{todo.title}</span>
            <div className="flex gap-x-3 items-center">
              <button className="">
                <HiCheck className="w-6 h-6 text-green-400" />
              </button>
              <button onClick={() => onDelete(todo.id)}>
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
  );
};

export default TodoList;
