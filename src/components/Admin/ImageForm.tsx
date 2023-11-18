import Image from 'next/image';
import { useState, KeyboardEvent, MouseEvent } from 'react';

import { CreatedProduct } from '@/app/admin/page';

type ImageFormProps = {
  createdProduct: CreatedProduct;
  handleGetBackClick: () => void;
};

const ImageForm = ({ createdProduct, handleGetBackClick }: ImageFormProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isImageUrl = (url: string): boolean => {
    return url.match(/\.(jpeg|jpg|gif|png|svg|webp)$/) != null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (isImageUrl(currentImage)) {
          setImages(prevImages => [...prevImages, currentImage]);
          setCurrentImage('');
          setError(null);
        } else {
          setCurrentImage('');
          throw new Error('O link fornecido não pertence a uma imagem.');
        }
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  const handleImagePreviewClick = (event: MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    setImages(imgs =>
      imgs.filter((img, index) => target.id !== `${img}${index}`),
    );
  };

  const imagesSubmitHandler = async () => {};

  return (
    <div className="bg-[#ffffff] px-10 py-8 w-[41.25em] min-h-[30em] flex flex-col max-md:text-[.9em] relative">
      <button
        onClick={handleGetBackClick}
        className="absolute top-0 right-0 py-3 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
      >
        Voltar
      </button>
      <span className="absolute top-0 left-0 py-3 px-4 font-bold text-[1.25em] text-green-600">
        Produto criado com sucesso!
      </span>
      <h2 className="font-bold text-[1.35em] text-center mt-8">
        Adicione a(s) imagem(ns) para seu produto
      </h2>

      {images.length > 0 ? (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {images.map((i, index) => (
            <Image
              id={`${i}${index}`}
              className="cursor-pointer"
              loader={() => i}
              key={index}
              src={i}
              width={100}
              height={100}
              alt={`Imagem ${index} do produto`}
              onClick={handleImagePreviewClick}
              title="Clique na imagem para excluí-la"
              unoptimized
            />
          ))}
        </div>
      ) : (
        <span className="font-bold mt-4">Nenhuma imagem adicionada.</span>
      )}

      <form className="mt-auto flex flex-col" onSubmit={imagesSubmitHandler}>
        <label className="font-medium" htmlFor="images">
          Insira os links das imagens e tecle{' '}
          <strong className="text-green-600">ENTER</strong>
        </label>
        <input
          className="border p-1 mb-6"
          id="images"
          value={currentImage}
          onChange={({ target }) => setCurrentImage(target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className="py-3 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
        >
          Enviar todas as imagens
        </button>
      </form>

      <span className="block text-red-600 font-bold">{error}</span>
    </div>
  );
};

export default ImageForm;
