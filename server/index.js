const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const Dish = require("./model");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();

connectToMongo();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: [
			"http://localhost:3000",
			"https://amar-codingenthusiast.github.io/dish-dashboard",
		],
	},
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/data", async (req, res) => {
	try {
		const data = await Dish.find();
		res.json(data);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.post("/api/toggle/:id", async (req, res) => {
	try {
		const dish = await Dish.findById(req.params.id);
		if (!dish) {
			return res.status(404).json({ message: "Dish not found" });
		}
		dish.isPublished = !dish.isPublished;
		await dish.save();
		io.emit("dishUpdated", dish);
		res.json(dish);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(PORT, () => {
	console.log(`Dish Dashboard backend listening at ${PORT}`);
});
