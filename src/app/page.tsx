import AppProductList from '@/components/AppStore';
import Banner from '@/components/Banner';
import Best_Sellers from '@/components/Best_Sellers';
import Categories from '@/components/Categories';

const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <AppProductList />
      <Best_Sellers />
    </main>
  );
};

export default Home;
