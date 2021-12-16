import { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';



const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'phone1',
      price: 500,
      count: 10,
      img: 'phone',
    },
    {
      id: 2,
      name: 'laptop1',
      price: 500,
      count: 10,
      img: 'laptop',
    },
  ]);

  const handleAddProduct = newItem => {
    setProducts(prev => [...prev, newItem]);
  };
 
  return (
    <div className="products">
      {/* <button onClick={handleAddProduct}>+ add item</button> */}
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default Products;
