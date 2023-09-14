import AppStore from '@/components/Home/AppStore';
import Banner from '@/components/Home/Banner';
import Best_Sellers from '@/components/Home/Best_Sellers';
import Categories from '@/components/Home/Categories';

const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <AppStore />
      <Best_Sellers />
    </main>
  );
};

export default Home;
