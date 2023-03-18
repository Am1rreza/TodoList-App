import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={onAdd}
      className="w-full max-w-screen-md bg-white pt-4 pb-2 px-2 sm:px-4 sm:pb-0 rounded-t-md flex justify-between items-center gap-x-4"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-blue-400 p-1 rounded outline-none transition-all duration-100 focus:ring-1 focus:ring-blue-400 w-2/3 sm:w-min"
      />
      <button
        type="submit"
        className="font-semibold bg-blue-200 text-blue-800 p-1.5 rounded w-16 sm:w-20"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
