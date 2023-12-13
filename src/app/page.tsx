'use client';

import AppStore from '@/components/Home/page/AppStore';
import Banner from '@/components/Home/page/Banner';
import Best_Sellers from '@/components/Home/page/Best_Sellers';
import Categories from '@/components/Home/page/Categories';
import Footer, { designer_mylena } from '@/components/Layout/Footer';

const Home = () => {
  return (
    <main className="flex-1">
      <Banner />
      <Categories />
      <AppStore />
      <Best_Sellers />
      <Footer name={designer_mylena.name} link={designer_mylena.link} />
    </main>
  );
};

export default Home;
