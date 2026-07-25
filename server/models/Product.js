import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
      trim: true,
    },


    description: {
      type: String,
      required: true,
    },


    category: {
      type: String,
      default: "Tarpaulin",
    },


    gsm: {
      type: String,
      default: "",
    },


    size: {
      type: String,
      default: "",
    },


    waterproof: {
      type: String,
      default: "Yes",
    },


    price: {
      type: Number,
      default: 0,
    },


    status: {
      type: String,
      default: "Active",
    },


    featured: {
      type: Boolean,
      default: false,
    },


    image: {
      type: String,
      default: "",
    },


  },
  {
    timestamps:true,
  }
);


const Product = mongoose.model(
  "Product",
  productSchema
);


export default Product;