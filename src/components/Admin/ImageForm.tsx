import Image from 'next/image';
import { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';

import { CreatedProduct } from '@/app/admin/page';

import SuccessSVG from './SuccessSVG';

type ImageFormProps = {
  createdProduct: CreatedProduct;
  handleGetBackClick: () => void;
};

const ImageForm = ({ createdProduct, handleGetBackClick }: ImageFormProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageUploadButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const imageInput = document.getElementById('images') as HTMLInputElement;

    if (imageInput) {
      imageInput.click();
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const hasNonImageFile = Array.from(files).some(
        file => !file.type.match(/^image\//),
      );

      if (hasNonImageFile) {
        throw new Error('Todos os arquivos devem ser imagens.');
      }

      const fileArray = Array.from(files);
      const previewUrls = fileArray.map(file => URL.createObjectURL(file));

      setImages(prevImages => [...prevImages, ...fileArray]);
      setImagePreviews(prevPreviews => [...prevPreviews, ...previewUrls]);
    }
  };

  const handleImageRemove = (indexToRemove: number) => {
    setImagePreviews(prevPreviews =>
      prevPreviews.filter((_, index) => index !== indexToRemove),
    );

    setImages(prevImages =>
      prevImages.filter((_, index) => index !== indexToRemove),
    );
  };

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      handleImageUpload(event);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const imagesSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const responses: Response[] = await Promise.all(
        images.map(async image => {
          const formData = new FormData();
          formData.append('image', image);
          const response = await fetch(
            `https://e-commerce-backend-am7w.onrender.com/api/products/images/${createdProduct._id}`,
            {
              method: 'POST',
              body: formData,
            },
          );
          console.log(await response.json());
          return response;
        }),
      );
      if (responses.every(response => response.ok)) setSuccess(true);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <div className="bg-[#ffffff] flex flex-col justify-center items-center px-10 py-8 w-[41.25em] min-h-[30em] max-md:text-[.9em] relative">
        <button
          onClick={handleGetBackClick}
          className="absolute top-0 right-0 py-3 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
        >
          Voltar
        </button>
        <h1 className="font-bold text-[1.5rem] mb-8">
          Produtos e imagens criados com sucesso!
        </h1>
        <SuccessSVG />
      </div>
    );

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

      {imagePreviews.length ? (
        <div className="grid grid-cols-4 mt-4 gap-4">
          {imagePreviews.map((previewUrl, index) => (
            <Image
              className="cursor-pointer"
              key={index}
              src={previewUrl}
              alt={`Preview ${index}`}
              width={110}
              height={110}
              title="Clique na imagem para excluí-la"
              onClick={() => handleImageRemove(index)}
            />
          ))}
        </div>
      ) : (
        <span className="mt-8 font-bold">Sem imagens selecionadas.</span>
      )}
      <form className="mt-auto flex flex-col" onSubmit={imagesSubmitHandler}>
        <button
          className="self-start py-3 px-6 bg-[#fff] font-bold text-[1.15em] text-[#3282B8] border border-[#3282B8] uppercase cursor-pointer transition-all hover:text-[#276690] hover:border-[#276690] disabled:bg-[#788e9e]"
          onClick={handleImageUploadButtonClick}
        >
          Insira as imagens aqui
        </button>
        <input
          className="hidden"
          type="file"
          multiple
          id="images"
          onChange={onImageSelect}
        />
        <button
          disabled={loading}
          id="submitBtn"
          type="submit"
          className="py-3 mt-4 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
        >
          {loading ? 'Carregando' : 'Enviar todas as imagens'}
        </button>
      </form>

      <span className="block text-red-600 font-bold">{error}</span>
    </div>
  );
};

export default ImageForm;
