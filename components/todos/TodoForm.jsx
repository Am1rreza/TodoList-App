import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);

  // Handlers
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.description === "" || formData.title === "") {
      alert("Please fill out the inputs !");
      return;
    }

    onAdd(formData);

    setFormData({ title: "", description: "" });
  };

  if (!isShow) {
    return (
      <div className="">
        <button
          onClick={() => setIsShow(true)}
          className="w-full py-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Add new todo?
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="w-full max-screen-w-md bg-white p-4 rounded-xl"
    >
      <div className="mb-4">
        <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
          Title
        </label>
        <input
          name="title"
          placeholder="Todo title ..."
          id="todo-title"
          className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-200 ease-out"
          type="text"
          value={formData.title}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-8">
        <label className="text-gray-600 mb-1 block" htmlFor="todo-description">
          Description
        </label>
        <textarea
          placeholder="Todo description ..."
          value={formData.description}
          onChange={changeHandler}
          name="description"
          id="todo-description"
          className="border resize-none px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-200 ease-out"
        ></textarea>
      </div>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setIsShow(false)}
          type="button"
          className="w-full py-2 text-blue-500 border border-blue-500 rounded-lg  transition-all duration-300 ease-in-out"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Add new todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
