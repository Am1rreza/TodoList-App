import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === "PUT") {
    let todo = await Todo.findById(query.todoId);
    todo.isCompleted = !todo.isCompleted;

    // save todo in db
    await todo.save();

    // get all todos
    const todos = await Todo.find({});

    return res.status(200).json({ todos });
  }
}
