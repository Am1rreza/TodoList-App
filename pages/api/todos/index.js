import { todos } from "@/data/todos";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newTodo = {
      id: new Date().getTime(),
      title: req.body.todoTitle,
    };
    todos.push(newTodo);

    return res.status(200).json({ message: "Todo Added !", todos });
  } else if (req.method === "GET") {
    return res.status(200).json({ todos });
  }
}
