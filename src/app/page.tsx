import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppProductList from '@/components/Home';

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <AppProductList/>
      <Footer />
    </main>
  );
};

export default Home;
