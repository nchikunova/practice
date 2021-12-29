import ProductItem from './ProductItem';

const Productlist = ({ products, onDelete }) => {
  return (
    <ul>
      {products.map(product =>
        product.count ? (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ) : null,
      )}
    </ul>
  );
};

export default Productlist;
