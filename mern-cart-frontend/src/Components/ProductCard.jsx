import React from 'react'

const ProductCard = ({name, description, price}) => {
  return (
    <div class="product-card">
      <img src="product-image.jpg" alt="Product Image" class="product-image"/>
      <h2 class="product-name">{name}</h2>
      <p class="product-description">{description}</p>
      <p class="product-price">{price}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  )
}

export default ProductCard
