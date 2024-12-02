import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../utilis/constant';
import ProductCard from './ProductCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${url}/allproducts`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (       
        <ProductCard {...product} key={product._id}/>
      ))}
    </div>
  );
}

export default ProductsPage;