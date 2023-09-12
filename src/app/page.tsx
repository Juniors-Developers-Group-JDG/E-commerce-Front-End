import Banner from '@/components/Banner';
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
      <Footer />
    </main>
  );
};

export default Home;
