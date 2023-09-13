import Image from 'next/image';
import Link from 'next/link';

import arrowImage from '@/assets/images/arrow.svg';
import expandLeft from '@/assets/images/expand-left.svg';
import expandRight from '@/assets/images/expand-right.svg';
import headsetImage from '@/assets/images/headset.svg';
import microphoneImage from '@/assets/images/microphone.svg';
import mouseImage from '@/assets/images/mouse.svg';
import projectorImage from '@/assets/images/projector.svg';
import windowsImage from '@/assets/images/windows.svg';
import CategoriesExpandButton from '@/components/UI/CategoriesExpandButton';

import CategoryCard from './CategoryCard';
import Product from './Product';

interface Category {
  label: string;
}

interface CategoriesProps {
  categories?: Category[];
}

const mockCategoriesData = [
  {
    label: 'Computadores',
  },
  {
    label: 'Áudio e Som',
  },
  {
    label: 'Tablets',
  },
  {
    label: 'Acessórios',
  },
  {
    label: 'Pc Gamer',
  },
];

const mockProductsData = [
  {
    image: mouseImage,
    title: 'Mouse Sem Fio 2.4GHZ USB Preto - MO285',
    price: '24.00',
    division: '4',
    olderPrice: '30.00',
    discount: '20',
  },
  {
    image: windowsImage,
    title:
      'Microsoft Windows 11 Pro 32/64 Bits ESD - Digital para Download - FQC-10572',
    price: '1000.00',
    division: '4',
    olderPrice: '2000.00',
    discount: '50',
  },
  {
    image: headsetImage,
    title:
      'Fortrek H2 - Headset Gamer Pro Microfones e Fones de Ouvido, Preto (Leds Azul)',
    price: '150.00',
    division: '10',
    olderPrice: '180.00',
    discount: '20',
  },
  {
    image: microphoneImage,
    title: 'HyperX Microfone Gamer QuadCast',
    price: '375.00',
    division: '3',
    olderPrice: '500.00',
    discount: '25',
  },
  {
    image: projectorImage,
    title:
      'Mini Projetor Portatil 5G Wifi 6 Bluetooth 5.0 Android 11, Projetor 4K 1080P Full HD Suporte 8000 Lumens',
    price: '300.00',
    division: '3',
    olderPrice: '400.00',
    discount: '20',
  },
];

const Categories = ({ categories = mockCategoriesData }: CategoriesProps) => {
  return (
    <>
      <div className="bg-[#000033] mt-12 pt-6 shadow-[inset_0_-5rem_0_rgba(256,256,256,1)]">
        <section className="w-[95%] px-6 mx-auto">
          <h2 className="text-[2.5em] text-white text-center font-bold">
            Categorias
          </h2>
          <div className="flex items-center justify-center relative">
            <p className="text-[1.5625em] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex gap-6 absolute right-0">
              <CategoriesExpandButton isDisabled>
                <Image
                  src={expandLeft}
                  width={42}
                  alt="Seta para expansão de categorias: esquerda"
                />
              </CategoriesExpandButton>
              <CategoriesExpandButton>
                <Image
                  src={expandRight}
                  width={42}
                  alt="Seta para expansão de categorias: direita"
                />
              </CategoriesExpandButton>
            </div>
          </div>
          <div className="flex gap-10 justify-center mt-10 mb-20">
            {categories.map((category, index) => (
              <CategoryCard label={category.label} key={index} />
            ))}
          </div>
        </section>
      </div>
      <div>
        <div className="flex flex-col w-[95%] px-6 mx-auto">
          <h2 className="font-bold text-[2.5em] text-[#000033]">
            Mais procurados
          </h2>
          <div className="flex justify-between">
            <p className="text-[1.5em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Link
              href="/promotions"
              className="text-[#3282B8] text-[1.5em] self-end font-semibold transition-all cursor-pointer hover:scale-[1.1]"
            >
              Ver todos
            </Link>
          </div>
        </div>
        <div className="flex justify-around mt-[2em]">
          <Image
            src={arrowImage}
            alt="Imagem seta para lado"
            className="rotate-90 transition-all cursor-pointer hover:scale-[1.3]"
          />
          {mockProductsData.map(product => (
            <Product
              key={product.title}
              title={product.title}
              price={product.price}
              image={product.image}
              discount={product.discount}
              division={product.division}
              olderPrice={product.olderPrice}
            />
          ))}
          <Image
            src={arrowImage}
            alt="Imagem seta para lado"
            className="rotate-[270deg] transition-all cursor-pointer hover:scale-[1.3]"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
