import ProductItem from "./ProductItem";

const Productlist = ({products}) => {
   return (
      <ul>
         {products.map((product) => product.count ? (
            <ProductItem key={product.id} product={product}/>
         ) : null,
         )}
      </ul>
   );
}

export default Productlist;

