import Image from 'next/image';

import mockCategoryImage from '@/assets/images/mock-category-img.svg';

interface CategoryCardProps {
  label: string;
}

const CategoryCard = ({ label }: CategoryCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-center bg-[#F3F3F3] h-[277px] w-[267px] rounded-md hover:scale-[1.025] transition-all cursor-pointer">
      <Image
        src={mockCategoryImage}
        width={86}
        alt="Imagem da Categoria"
        className="m-10"
      />
      <h3 className="text-[#000333] font-bold text-[30px]">{label}</h3>
    </div>
  );
};

export default CategoryCard;
