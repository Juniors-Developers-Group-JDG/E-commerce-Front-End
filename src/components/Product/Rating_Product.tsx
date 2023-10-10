import Image from 'next/image';

import starGrayIcon from '@/assets/images/starGray.svg';

import StarRating from './StarRating';
import ProgressBar from './ProgressBar';

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
  avaliacoes1Estrelas
}: Props) => {
  return (
    <main className="px-5 pb-3">
      <div>
        <div>
          <span>{nota}</span>
        </div>

        <div>
          <StarRating nota={nota}/>
          <span>{quantidadeDeAvaliacoes} avaliações</span>
        </div>
      </div>

      <div>
        <div className='flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center'>
          <ProgressBar value={avaliacoes5Estrelas}/>
          <div className='flex'>
            <span>5</span>
            <Image className='ml-1' src={starGrayIcon} alt='Icone de estrela'/>
          </div>
        </div>

        <div className='flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center'>
          <ProgressBar value={avaliacoes4Estrelas}/>
          <div className='flex'>
            <span>4</span>
            <Image className='ml-1' src={starGrayIcon} alt='Icone de estrela'/>
          </div>
        </div>

        <div className='flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center'>
          <ProgressBar value={avaliacoes3Estrelas}/>
          <div className='flex'>
            <span>3</span>
            <Image className='ml-1' src={starGrayIcon} alt='Icone de estrela'/>
          </div>
        </div>

        <div className='flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center'>
          <ProgressBar value={avaliacoes2Estrelas}/>
          <div className='flex'>
            <span>2</span>
            <Image className='ml-1' src={starGrayIcon} alt='Icone de estrela'/>
          </div>
        </div>

        <div className='flex flex-nowrap w-[300px] max-w-[90%] justify-between items-center'>
          <ProgressBar value={avaliacoes1Estrelas}/>
          <div className='flex'>
            <span>1</span>
            <Image className='ml-1' src={starGrayIcon} alt='Icone de estrela'/>
          </div>
        </div>
        
        
      </div>
      
    </main>
  );
};

export default Rating_Product;


