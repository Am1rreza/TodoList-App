import { HiCheck, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi2";

const TodoList = ({ data, onDelete }) => {
  return (
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
