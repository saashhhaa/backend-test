import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Подключение маршрутов
app.use("/api/auth", authRoutes);

// Тестовый маршрут
app.get("/api", (req, res) => {
  res.json({ message: "Сервер работает!" });
});

// Подключение к MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("База данных подключена"))
  .catch(err => console.log(err));

// Запуск сервера
app.listen(5000, () => console.log("Сервер запущен на порту 5000"));
