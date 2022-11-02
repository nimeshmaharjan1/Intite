import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty.'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter the product's description."],
    },
    price: {
        type: Number,
        required: [true, 'Please Enter product Price'],
        maxLength: [8, 'Price cannot exceed 8 characters'],
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: [true, "Please enter the product's category."],
    },
    stock: {
        type: Number,
        required: [true, "Please enter the product's stock."],
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('products', productSchema) || mongoose.models.products;
