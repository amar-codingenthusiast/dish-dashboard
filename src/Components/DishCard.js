import React from "react";
import { Card } from "react-bootstrap";
import "./custom.css";

const DishCard = ({ dish, onToggle }) => {
	return (
		<Card
			className={`mb-3 ${
				dish.isPublished ? "card-active" : "card-inactive"
			}`}
		>
			<div>
				<Card.Img variant="top" className="p-1" style={{aspectRatio: 4/3}} src={dish.imageUrl} />
			</div>
			<Card.Body>
				<Card.Title>{dish.dishName}</Card.Title>
				<Card.Text>
					{dish.isPublished ? "Published" : "Unpublished"}
				</Card.Text>
				<div
					className={`toggle-switch ${
						dish.isPublished ? "active" : ""
					}`}
					onClick={() => onToggle(dish._id)}
				/>
			</Card.Body>
		</Card>
	);
};

export default DishCard;
