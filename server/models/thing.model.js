const mongoose = require("mongoose");
const ThingSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: [true, "{PATH} is required"],
      validate: {
        validator: function (value) {
          return value.length >= 3 && value !== "cake";
        },
        message:
          '{PATH} must contain at least 3 characters and cannot be "cake"',
      },
    },
    Likes: {
      type: Number,
      required: [true, "{PATH} is required"],
    }
  },
  {
    timestamps: true,
  }
);

const Things = mongoose.model("Thing", ThingSchema);
module.exports = Things;
