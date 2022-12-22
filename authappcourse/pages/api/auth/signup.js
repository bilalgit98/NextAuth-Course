import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch((error) =>
    res.json({ error: "Connection Failed!!!!!" })
  );

  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "NO FORM DATA FOUND" });
    const { username, email, password } = req.body;
    const checkExist = await Users.findOne({ email });
    if (checkExist)
      return res.status(422).json({ message: "USER ALREADY EXISTS!" });

    Users.create(
      {
        username,
        email,
        password: await hash(password, 12),
      },
      function (error, data) {
        if (error) return res.status(404).json({ error });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res.status(500).json({ message: "HTTP METHOD NOT VALID!! ONLY POST" });
  }
}
