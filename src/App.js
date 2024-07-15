import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { Container, Row, Col } from "react-bootstrap";
import DishCard from "./Components/DishCard";

// const Backend_URL = "http://localhost:5000";
const Backend_URL = "https://dish-dashboard-backend.glitch.me";
const socket = io(Backend_URL);

const App = () => {
	const [dishes, setDishes] = useState([]);

	const fetchDishes = async () => {
		try {
			const response = await axios.get(`${Backend_URL}/api/data`);
			setDishes(response.data);
		} catch (error) {
			console.error("Error fetching dishes:", error);
		}
	};

	const togglePublished = async (id) => {
		try {
			await axios.post(`${Backend_URL}/api/toggle/${id}`);
		} catch (error) {
			console.error("Error toggling dish status:", error);
		}
	};

	useEffect(() => {
		fetchDishes();

		socket.on("dishUpdated", (updatedDish) => {
			setDishes((prevDishes) =>
				prevDishes.map((dish) =>
					dish._id === updatedDish._id ? updatedDish : dish
				)
			);
		});

		return () => {
			socket.off("dishUpdated");
		};
	}, []);

	return (
		<Container>
			<h1
				className="mt-4 mb-4 text-center"
				style={{ textDecoration: "underline" }}
			>
				Dish Dashboard
			</h1>
			<Row>
				{dishes.map((dish) => (
					<Col key={dish._id} xs={12} sm={6} md={4} lg={3}>
						<DishCard dish={dish} onToggle={togglePublished} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default App;
