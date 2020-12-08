import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, required: true },
    publisher: { type: String, required: true },
    condition: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
