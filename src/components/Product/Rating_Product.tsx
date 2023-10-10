import Image from 'next/image';

import starGrayIcon from '@/assets/images/starGray.svg';

import ProgressBar from './ProgressBar';
import StarRating from './StarRating';

interface Props {
  nota: number;
  quantidadeDeAvaliacoes: number;
  avaliacoes5Estrelas: number;
  avaliacoes4Estrelas: number;
  avaliacoes3Estrelas: number;
  avaliacoes2Estrelas: number;
  avaliacoes1Estrelas: number;
}

const Rating_Product = ({
  nota,
  quantidadeDeAvaliacoes,
  avaliacoes5Estrelas,
  avaliacoes4Estrelas,
  avaliacoes3Estrelas,
  avaliacoes2Estrelas,
  avaliacoes1Estrelas,
}: Props) => {
  const ratingValue = nota.toString().replace('.', ',');

  return (
    <section className="px-5 pb-3">
      <div className="flex items-center gap-[.5em]">
        <div>
          <span className="text-[2.5em] font-bold">{ratingValue}</span>
        </div>
        <div>
          <StarRating nota={nota} />
          <span className="text-[#525252]">
            {quantidadeDeAvaliacoes} avaliações
          </span>
        </div>
      </div>
      <div>
        <div className="flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center gap-[.625em]">
          <ProgressBar value={avaliacoes5Estrelas} />
          <div className="flex text-[#9E9E9E]">
            <span>5</span>
            <Image className="ml-1" src={starGrayIcon} alt="Icone de estrela" />
          </div>
        </div>
        <div className="flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center gap-[.625em]">
          <ProgressBar value={avaliacoes4Estrelas} />
          <div className="flex text-[#9E9E9E]">
            <span>4</span>
            <Image className="ml-1" src={starGrayIcon} alt="Icone de estrela" />
          </div>
        </div>
        <div className="flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center gap-[.625em]">
          <ProgressBar value={avaliacoes3Estrelas} />
          <div className="flex text-[#9E9E9E]">
            <span>3</span>
            <Image className="ml-1" src={starGrayIcon} alt="Icone de estrela" />
          </div>
        </div>
        <div className="flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center gap-[.625em]">
          <ProgressBar value={avaliacoes2Estrelas} />
          <div className="flex text-[#9E9E9E]">
            <span>2</span>
            <Image className="ml-1" src={starGrayIcon} alt="Icone de estrela" />
          </div>
        </div>
        <div className="flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center gap-[.625em]">
          <ProgressBar value={avaliacoes1Estrelas} />
          <div className="flex text-[#9E9E9E]">
            <span>1</span>
            <Image className="ml-1" src={starGrayIcon} alt="Icone de estrela" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating_Product;
