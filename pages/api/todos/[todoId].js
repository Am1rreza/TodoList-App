import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === "DELETE") {
    await Todo.findByIdAndDelete(query.todoId);
    // get all todos
    const todos = await Todo.find({});

    return res
      .status(200)
      .json({ message: "Todo Deleted Successfully !", todos });
  } else if (method === "GET") {
    const todo = await getOneTodo(query);

    return res.status(200).json({ message: "Todo Loaded", todo });
  } else if (method === "PUT") {
    let todo = await Todo.findById(query.todoId);
    todo.title = req.body.todo.title;
    todo.description = req.body.todo.description;
    todo.isCompleted = req.body.todo.isCompleted;

    // save todo in db
    await todo.save();

    // get all todos
    const todos = await Todo.find({});

    return res.status(200).json({ message: "Todo Updated !", todos });
  }
}

export async function getOneTodo(query) {
  const todo = await Todo.findById(query.todoId);

  return todo;
}
