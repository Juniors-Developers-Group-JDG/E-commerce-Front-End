'use client';

import AppStore from '@/components/Home/AppStore';
import Banner from '@/components/Home/Banner';
import Best_Sellers from '@/components/Home/Best_Sellers';
import Categories from '@/components/Home/Categories';
import Footer, { designer_mylena } from '@/components/Layout/Footer';
import useQueryGetProducts from '@/hooks/useQueryGetProducts';

const Home = () => {
  const { data, isFetching, isError } = useQueryGetProducts();

  return (
    <main className="flex-1">
      <Banner data={data} isFetching={isFetching} isError={isError} />
      <Categories data={data} isFetching={isFetching} isError={isError} />
      <AppStore data={data} isFetching={isFetching} isError={isError} />
      <Best_Sellers data={data} isFetching={isFetching} isError={isError} />
      <Footer name={designer_mylena.name} link={designer_mylena.link} />
    </main>
  );
};

export default Home;
