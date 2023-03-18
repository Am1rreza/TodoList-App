import dbConnect from "@/server/utils/dbConnect";
import todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    const { formData } = body;
    await todo.create({
      title: formData.title,
      description: formData.description,
    });
    // get all todos
    const todos = await todo.find({});

    return res.status(200).json({ message: "New Todo Added !", todos });
  } else if (method === "GET") {
    const todos = await todo.find({});

    return res.status(200).json({ todos });
  }
}
