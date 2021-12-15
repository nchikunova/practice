import { useState } from 'react';
import ProductList from './Products';



const Products = () => {
   const [products, setProducts] = useState([
      {
         id: 1,
         name: 'phone1',
         price: 500,
         count: 10,
         img: 'phone1'
      }
   ]);

   return (
      <div className='products'>
         <ProductList products = {products} />
      </div>
   )
}

export default Products;