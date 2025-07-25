import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = 'https://dummyjson.com/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(Api);
        setTimeout(() => {
          setProducts(response.data.products);
          setLoading(false);
        }, 5000);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products:</h1>
      {loading && <p style={{ color: 'red', fontFamily: 'monospace' }}>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating is: {product.rating}</p>
          <p>Tag is: {Array.isArray(product.tags) ? product.tags.join(', ') : product.tags}</p>
          <strong>Reviews:</strong>
          {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
            <ul>
              {product.reviews.map((review, idx) => (
                <li key={idx}>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                  <p>Reviewer: {review.reviewerName} ({review.reviewerEmail})</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductList;