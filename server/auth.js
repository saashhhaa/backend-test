import express from "express";
import User from "./Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET = "secretkey";

// Регистрация — **обязательно POST**
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash });
    res.json({ message: "Пользователь создан", userId: user._id });
  } catch (err) {
    res.status(400).json({ error: "Пользователь уже существует" });
  }
});

// Вход — **тоже POST**
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "Пользователь не найден" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Неверный пароль" });

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Вход успешен", token });
});

export default router;
