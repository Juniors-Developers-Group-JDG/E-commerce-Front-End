'use client';

import { useParams } from 'next/navigation';

const Product = () => {
  const params = useParams();

  return (
    <main>
      <h1>Product {params.id}</h1>
    </main>
  );
};

export default Product;
