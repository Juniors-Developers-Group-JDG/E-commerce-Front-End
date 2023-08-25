import Image from 'next/image';
import Link from 'next/link';

import expandLeft from '@/assets/images/expand-left.svg';
import expandRight from '@/assets/images/expand-right.svg';
import CategoriesExpandButton from '@/components/UI/CategoriesExpandButton';
import CategoryCard from './CategoryCard';

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

const Categories = ({ categories = mockCategoriesData }: CategoriesProps) => {
  return (
    <div className="bg-[#000033] pt-6 shadow-[inset_0_-17.5rem_0_rgba(256,256,256,1)]">
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
        <div className="flex gap-8 justify-evenly mt-10 mb-20">
          {categories.map(category => (
            <CategoryCard label={category.label} />
          ))}
        </div>
        <div className="flex flex-col ">
          <h2 className="font-bold text-[2.5em] text-[#000033]">
            Mais procurados
          </h2>
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
      </section>
    </div>
  );
};

export default Categories;
