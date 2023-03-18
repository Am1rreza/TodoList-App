import dbConnect from "@/server/utils/dbConnect";
import todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const newTodo = {
      id: new Date().getTime(),
      title: req.body.formData.title,
      description: req.body.formData.description,
    };
    todos.push(newTodo);

    return res.status(200).json({ message: "Todo Added !", todos });
  } else if (req.method === "GET") {
    const todos = await todo.find({});
    return res.status(200).json({ todos });
  }
}
