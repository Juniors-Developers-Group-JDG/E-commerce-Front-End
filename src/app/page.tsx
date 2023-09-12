import Banner from '@/components/Banner';
import Best_Sellers from '@/components/Best_Sellers';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppProductList from '@/components/Home';

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Categories />
      <AppProductList />
      <Best_Sellers />
      <Footer />
    </main>
  );
};

export default Home;
