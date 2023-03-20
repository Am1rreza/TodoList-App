import dbConnect from "@/server/utils/dbConnect";
import todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === "DELETE") {
    console.log(query.todoId);
    await todo.findByIdAndDelete(query.todoId);
    // get all todos
    const todos = await todo.find({});

    return res
      .status(200)
      .json({ message: "Todo Deleted Successfully !", todos });
  }
}
