# Fruit Web Models

A comprehensive Mongoose schema collection for a fruit e-commerce web application, specifically designed for pear (水梨) sales with complete order management system.

## Features

- **Product Management**: Pear grading and catalog system
- **Order Processing**: Complete order workflow with item tracking
- **Admin Authentication**: Secure admin login with password hashing
- **Database Optimization**: Indexed fields for enhanced query performance

## Models

### Product
Manages fruit products with grading system:
- `grade`: Product grade/name (required, max 100 chars)
- `price`: Product price (required, non-negative)
- `quantity`: Number of pieces (required)
- `catelog`: Product category ('single' or 'double', default: 'single')

### Order
Complete order management:
- `orderNumber`: Unique order identifier
- `orderItems`: Array of OrderItem references
- `sender`: Customer information (name, phone, address)
- `receiver`: Delivery recipient information (name, phone, address)
- `subtotal`: Order subtotal (excluding shipping)
- `shippingFee`: Shipping cost (default: 100)
- `totalAmount`: Total order amount (including shipping)
- `notes`: Optional order notes (max 500 chars)
- `status`: Order status ('processing', 'shipped', 'cancelled')

### OrderItem
Individual order line items:
- `orderNumber`: Associated order number
- `product`: Product reference (ObjectId)
- `productName`: Product name snapshot
- `price`: Price snapshot at order time
- `quantity`: Ordered quantity (minimum 1)
- `subtotal`: Line item subtotal

### Admin
Administrative user management:
- `email`: Admin email (unique, validated)
- `password`: Hashed password using bcryptjs
- Password comparison methods included

## Installation

```bash
npm install
```

## Usage

```javascript
const mongoose = require('mongoose');
const createModels = require('fruit-web-models');

// Connect to MongoDB
await mongoose.connect('your-mongodb-connection-string');

// Initialize models
const models = createModels(mongoose);

// Use models
const product = new models.Product({
  grade: 'Premium Pear',
  price: 150,
  quantity: 10,
  catelog: 'single'
});

await product.save();
```

## Environment Variables

Required for Admin model:
- `SALT_ROUNDS`: Number of salt rounds for password hashing

## Dependencies

- `mongoose`: MongoDB object modeling
- `bcryptjs`: Password hashing
- `dotenv`: Environment variable management

## Database Indexes

Optimized indexes for better query performance:
- **Product**: grade, catelog, price
- **Order**: status, createdAt (descending)
- **OrderItem**: orderNumber, product

## License

ISC