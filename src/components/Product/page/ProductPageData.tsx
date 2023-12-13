import useQueryGetProducts from '@/hooks/useQueryGetProducts';
import { Product } from '@/models/product';

export const ProductPageData = (params: string) => {
  const { data, isFetching, isError } = useQueryGetProducts();

  const productData: Product[] = [];
  let redirect = null;

  if (data) {
    if (Number(params) > data.length) {
      redirect = true;
    }
  }

  data?.slice(Number(params) - 1, Number(params)).map(prod => {
    for (let i = 0; i < prod.images.length; i++) {
      productData.push(prod);
    }
  });

  return { productData, isFetching, isError, redirect };
};
