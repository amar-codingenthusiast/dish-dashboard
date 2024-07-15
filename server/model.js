const mongoose = require("mongoose");
const { Schema } = mongoose;

const DishesSchema = new Schema(
	{
		dishName: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		isPublished: {
			type: Boolean,
			default: false,
		},
	},
	{ collection: "dishes" }
);
module.exports = mongoose.model("dishes", DishesSchema);
