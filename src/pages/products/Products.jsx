import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { getProducts, addProduct } from '../../api/products-api.jsx';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  const handleAddProduct = newItem => {
    // setProducts(prev => [...prev, newItem]);
    addProduct(newItem)
      .then(data => setProducts(prev => [...prev, newItem]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteProduct = id =>
    setProducts(prevState => prevState.filter(product => product.id !== id));

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('products'));
    setIsLoading(true);

    getProducts()
      .then(data => setProducts(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />
      {error && (
        <p style={{ color: 'red', fontWeight: '500' }}>
          {error} <button onClick={() => setError(undefined)}>X</button>
        </p>
      )}

      {IsLoading && <p>Loading...</p>}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Products;
