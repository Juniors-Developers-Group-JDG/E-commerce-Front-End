import Image from 'next/image';

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
    <div className="bg-[#000033] pt-6 shadow-[inset_0_-10rem_0_rgba(256,256,256,1)]">
      <section className="px-10">
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
        <div className="flex gap-8 justify-center mt-10 mb-20">
          {categories.map(category => (
            <CategoryCard label={category.label} />
          ))}
        </div>

        <h2>Mais procurados</h2>
      </section>
    </div>
  );
};

export default Categories;
