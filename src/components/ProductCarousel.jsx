import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "flowbite-react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const visibleProducts = products.slice(0, 4);

  return (
    <div className="h-[600px] mx-auto py-4">
      <h2 className="font-semibold text-center text-2xl mt-5 mb-2">
        Product Carousel
      </h2>
      <Carousel>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div key={product.id} className="p-4 h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-xl font-bold">${product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
