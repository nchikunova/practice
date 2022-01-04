import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'phone1',
      price: 500,
      count: 10,
      img: 'phone',
    },
    {
      id: '2',
      name: 'laptop1',
      price: 500,
      count: 10,
      img: 'laptop',
    },
  ]);

  const handleAddProduct = newItem => {
    setProducts(prev => [...prev, newItem]);
  };

  const handleDeleteProduct = id =>
    setProducts(prevState => prevState.filter(product => product.id !== id));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products'));
    setProducts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Products;
