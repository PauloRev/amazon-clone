import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';

export default function ProductFeed() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, [allProducts]);

  const getAllProducts = async () => {
    const products = await fetch(`https://fakestoreapi.com/products`).then(
      (res) => res.json()
    );
    setAllProducts(products);
  };

  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {allProducts.length > 0 &&
          allProducts
            .slice(0, 4)
            .map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}

        <div className="md:col-span-2">
          {allProducts.length > 0 &&
            allProducts
              .slice(4, 5)
              .map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
        </div>

        {allProducts.length > 0 &&
          allProducts
            .slice(5, allProducts.length)
            .map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
      </div>
    </>
  );
}
