import Image, { StaticImageData } from 'next/image';

import deslikeIcon from '@/assets/images/product-page/deslike.svg';
import likeIcon from '@/assets/images/product-page/like.svg';

import StarRating from './StarRating';

interface Props {
  id: number;
  nota: number;
  comment: string;
  data_comment: string;
  likes: number;
  deslikes: number;
  caminho?: StaticImageData;
}

const Comments_Product = ({
  id,
  comment,
  nota,
  data_comment,
  likes,
  deslikes,
  caminho,
}: Props) => {
  return (
    <section
      key={id}
      className="flex flex-col w-fit px-5 pb-3 mb-5 mt-5 border-b border-gray-300"
    >
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="mb-2 mt-2 ">
          <StarRating nota={nota} />
        </div>
        <div className="font-semibold mb-2 mt-2">{data_comment}</div>
      </div>
      <div>
        {caminho && (
          <Image
            src={caminho}
            alt="Imagem do produto"
            width={500}
            height={500}
            className='"max-w-4/5 max-h-4/5 '
          />
        )}
      </div>
      <div className="text-lg mb-2 mt-2">
        <p>{comment}</p>
      </div>
      <div className="flex">
        <div className="flex w-[80px] justify-start">
          <Image
            src={likeIcon}
            alt="Icone de likes"
            className="cursor-pointer"
          />
          <span className="ml-5">{likes}</span>
        </div>
        <div className="flex w-[80px] ml-10">
          <Image
            src={deslikeIcon}
            alt="Icone de deslikes"
            className="cursor-pointer"
          />
          <span className="ml-5">{deslikes}</span>
        </div>
      </div>
    </section>
  );
};

export default Comments_Product;
