import axios from 'axios';
import Image from 'next/image';
import { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';

import SuccessSVG from './SuccessSVG';

type ImageFormProps = {
  createdProduct: Product;
  handleGetBackClick: () => void;
};

const ImageForm = ({ createdProduct, handleGetBackClick }: ImageFormProps) => {
  const [image, setImage] = useState<File | null>();
  const [imagePreview, setImagePreview] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [addMore, setAddMore] = useState(false);

  const handleImageUploadButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const imageInput = document.getElementById('images') as HTMLInputElement;

    if (imageInput) {
      imageInput.click();
    }
  };

  const handleImageUploadDelete = () => {
    setImage(null);
    setImagePreview('');
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files[0]) {
      const file = files[0];
      if (!file.type.startsWith('image/')) {
        throw new Error('O arquivo selecionado não é uma imagem.');
      }
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleYesClick = () => {
    setAddMore(false);
    setImage(null);
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
      const formData = new FormData();
      if (!image) throw new Error('Nenhuma imagem selecionada.');
      formData.append('image', image);
      const response = await axios.post<{ message: string }>(
        `https://e-commerce-backend-am7w.onrender.com/api/products/images/${createdProduct._id}`,
        formData,
      );

      if (response.status === 201) setAddMore(true);
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
          Produto e imagens criados com sucesso!
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
        Adicione a imagem para seu produto
      </h2>

      {imagePreview ? (
        <div className="flex flex-col justify-center items-center my-4">
          <Image
            className="cursor-pointer"
            key={imagePreview}
            src={imagePreview}
            alt={imagePreview}
            width={200}
            height={200}
            title="Clique na imagem para excluí-la"
            onClick={handleImageUploadDelete}
          />
        </div>
      ) : (
        <span className="mt-8 font-bold">Sem imagens selecionadas.</span>
      )}
      <form className="mt-auto flex flex-col" onSubmit={imagesSubmitHandler}>
        {!image && (
          <>
            <button
              className="self-start py-3 px-6 bg-[#fff] font-bold text-[1.15em] text-[#3282B8] border border-[#3282B8] uppercase cursor-pointer transition-all hover:text-[#276690] hover:border-[#276690] disabled:bg-[#788e9e]"
              onClick={handleImageUploadButtonClick}
            >
              Insira a imagem aqui
            </button>
            <input
              className="hidden"
              type="file"
              id="images"
              onChange={onImageSelect}
            />
          </>
        )}
        {addMore ? (
          <div className="flex flex-col mt-6 items-center">
            <h3 className="text-center font-bold text-[1.125em]">
              Imagem adicionada! Adicionar mais imagens?
            </h3>
            <div className="flex justify-center gap-2 mt-2">
              <button
                onClick={handleYesClick}
                className="py-3 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase border border-transparent cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
              >
                Sim
              </button>
              <button
                onClick={() => setSuccess(true)}
                className="py-3 px-6 bg-[#fff] font-bold text-[1.15em] text-[#3282B8] border border-[#3282B8] uppercase cursor-pointer transition-all hover:text-[#276690] hover:border-[#276690] disabled:bg-[#788e9e]"
              >
                Não
              </button>
            </div>
          </div>
        ) : (
          <button
            disabled={loading}
            id="submitBtn"
            type="submit"
            className="py-3 mt-4 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
          >
            {loading ? 'Carregando' : 'Enviar imagem'}
          </button>
        )}
      </form>

      <span className="block text-red-600 font-bold">{error}</span>
    </div>
  );
};

export default ImageForm;
