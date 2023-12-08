'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Promotions = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/products?discount=20');
  }, [router]);
};

export default Promotions;
