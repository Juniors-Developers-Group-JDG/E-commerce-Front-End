import Image from 'next/image';
import Link from 'next/link';

import arrowImage from '@/assets/images/arrow.svg';
import defaultProductImage from '@/assets/images/defaultProductImage.png';
import expandLeft from '@/assets/images/expand-left.svg';
import expandRight from '@/assets/images/expand-right.svg';
import CategoriesExpandButton from '@/components/UI/CategoriesExpandButton';
import { Product as ProductModel } from '@/models/product';

import CategoryCard from '../CategoryCard';
import Product from '../Product';

interface Category {
  label: string;
}

interface CategoriesProps {
  categories?: Category[];
  data: ProductModel[] | undefined;
  isFetching: boolean;
  isError: boolean;
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

const Categories = ({
  categories = mockCategoriesData,
  data,
  isFetching,
  isError,
}: CategoriesProps) => {
  return (
    <article>
      <div className="bg-[#000033] mt-12 pt-6 shadow-[inset_0_-5rem_0_rgba(256,256,256,1)]">
        <section className="w-[95%] px-6 mx-auto">
          <h2 className="text-[2.5em] text-white text-center font-bold">
            Categorias
          </h2>
          <div className="flex items-center justify-center relative">
            <p className="text-[1.5625em] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex gap-6 absolute right-0 max-lg:top-[-3em] max-md:right-auto max-md:top-[8em]">
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
          <div className="flex gap-10 justify-center mt-10 mb-20 max-lg:gap-[1em] max-md:mt-[6em]">
            {categories.map((category, index) => (
              <CategoryCard label={category.label} key={index} />
            ))}
          </div>
        </section>
      </div>
      <div>
        <div className="flex flex-col w-[95%] px-6 mx-auto">
          <h2 className="font-bold text-[2.5em] text-[#000033] max-md:text-[2em]">
            Mais procurados
          </h2>
          <div className="flex justify-between max-md:flex-col">
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
          <div className="flex w-full justify-evenly">
            {isFetching &&
              !data &&
              [1, 2, 3, 4, 5].map((_, index) => (
                <Product
                  key={index * 3213125745}
                  title="Carregando..."
                  price="Carregando..."
                  image={defaultProductImage}
                  discount=""
                  division=""
                  olderPrice=""
                />
              ))}
            {data
              ?.slice(0, 5)
              .map(prod => (
                <Product
                  key={prod._id}
                  title={prod.name}
                  price={prod.price?.toString()}
                  image={prod.images[0]}
                  discount=""
                  division=""
                  olderPrice=""
                />
              ))}
            {isError && <p>Algo deu errado, tente recarregar a página</p>}
          </div>
          <Image
            src={arrowImage}
            alt="Imagem seta para lado"
            className="rotate-[270deg] transition-all cursor-pointer hover:scale-[1.3]"
          />
        </div>
      </div>
    </article>
  );
};

export default Categories;
