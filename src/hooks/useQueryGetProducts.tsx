import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Product } from '@/models/product';

const URL = 'https://e-commerce-backend-am7w.onrender.com/api/products/';

const useQueryGetProducts = () => {
  const { data, isFetching, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
  return { data, isFetching, isError };
};

export default useQueryGetProducts;
