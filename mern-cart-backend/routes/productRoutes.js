const express = require('express');
const router = express.Router();
const Product = require('../model/productModel');

const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 999.99,
    description: "A high-end smartphone with a 6.1-inch screen and a powerful A15 Bionic chip.",
    image: "https://example.com/iphone13.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 899.99,
    description: "A flagship smartphone with a 6.2-inch screen and a large 5000mAh battery.",
    image: "https://example.com/s22.jpg"
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 699.99,
    description: "A mid-range smartphone with a 6.0-inch screen and a great camera.",
    image: "https://example.com/pixel6.jpg"
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    price: 799.99,
    description: "A high-end smartphone with a 6.7-inch screen and fast charging.",
    image: "https://example.com/oneplus9pro.jpg"
  },
  {
    id: 5,
    name: "Apple MacBook Air",
    price: 1099.99,
    description: "A lightweight laptop with a 13.3-inch screen and a powerful M1 chip.",
    image: "https://example.com/macbookair.jpg"
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 999.99,
    description: "A compact laptop with a 13.4-inch screen and a long-lasting battery.",
    image: "https://example.com/xps13.jpg"
  },
  {
    id: 7,
    name: "HP Envy x360",
    price: 699.99,
    description: "A convertible laptop with a 15.6-inch screen and a powerful AMD processor.",
    image: "https://example.com/envyx360.jpg"
  },
  {
    id: 8,
    name: "Canon EOS Rebel T8i",
    price: 749.99,
    description: "A DSLR camera with a 24.1MP sensor and 4K video recording.",
    image: "https://example.com/eost8i.jpg"
  },
  {
    id: 9,
    name: "Sony Alpha a6400",
    price: 999.99,
    description: "A mirrorless camera with a 24.2MP sensor and fast autofocus.",
    image: "https://example.com/a6400.jpg"
  },
  {
    id: 10,
    name: "Nikon D5600",
    price: 699.99,
    description: "A DSLR camera with a 24.2MP sensor and built-in Wi-Fi.",
    image: "https://example.com/d5600.jpg"
  },
  {
    id: 11,
    name: "Apple AirPods Pro",
    price: 249.99,
    description: "Wireless earbuds with active noise cancellation and water resistance.",
    image: "https://example.com/airpodspro.jpg"
  },
  {
    id: 12,
    name: "Samsung Galaxy Buds",
    price: 149.99,
    description: "Wireless earbuds with a compact design and long battery life.",
    image: "https://example.com/galaxybuds.jpg"
  },
  {
    id: 13,
    name: "Sony WH-1000XM4",
    price: 349.99,
    description: "Wireless headphones with industry-leading noise cancellation.",
    image: "https://example.com/wh1000xm4.jpg"
  },
  {
    id: 14,
    name: "Beats Solo Pro",
    price: 299.99,
    description: "Wireless headphones with a sleek design and long battery life.",
    image: "https://example.com/solopro.jpg"
  },
  {
    id: 15,
    name: "Google Home Mini",
    price: 49.99,
    description: "A compact smart speaker with Google Assistant built-in.",
    image: "https://example.com/home-mini.jpg"
  }
];
// Get all products
router.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).exec();
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true }).exec();
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating product' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndRemove(id).exec();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});

module.exports = router;