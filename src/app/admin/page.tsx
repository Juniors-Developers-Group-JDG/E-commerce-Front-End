'use client';
import axios from 'axios';
import { FormEvent, useState } from 'react';

import ImageForm from '@/components/Admin/ImageForm';
import Footer, { designer_thaissa } from '@/components/Layout/Footer';

enum Categories {
  default = 'Selecione a categoria',
  mouse = 'Mouse',
  teclado = 'Teclado',
  microfone = 'Microfone',
  console = 'Console',
  celular = 'Celular',
  placaDeVideo = 'Placa de vídeo',
  roteador = 'Roteador',
}

type ProductPostResponse = {
  message: string;
  newProduct: Product;
};

const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<string>(Categories.default);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [createdProduct, setCreatedProduct] = useState<Product | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleProductSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct();
  };

  const handleGetBackClick = () => {
    setError('');
    setCreatedProduct(null);
  };

  const body = {
    name,
    price,
    description,
    amount,
    category,
    images: [],
    discount: 0,
  };

  const validateInput = () => {
    if (
      !name ||
      !price ||
      !category ||
      category[0] === 'Selecione a categoria' ||
      !amount ||
      !description
    ) {
      throw new Error('Preencha todos os campos corretamente.');
    }
  };

  const resetForm = () => {
    setName('');
    setAmount('');
    setDescription('');
    setPrice('');
    setCategory('');
  };

  const createProduct = async () => {
    setLoading(true);
    setError('');

    try {
      validateInput();
      const response = await axios.post<ProductPostResponse>(
        'https://e-commerce-backend-am7w.onrender.com/api/products/create/',
        body,
      );

      if (!response) {
        throw new Error('Houve um erro ao criar o produto.');
      }
      const { data } = response;
      setCreatedProduct(data.newProduct);
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-[70%] bg-[#000033] flex justify-center items-center mt-[1em] max-md:mt-[6em]">
        {createdProduct ? (
          <ImageForm
            createdProduct={createdProduct}
            handleGetBackClick={handleGetBackClick}
          />
        ) : (
          <form
            onSubmit={handleProductSubmit}
            className="bg-[#ffffff] w-[41.25em] min-h-[32.5em] flex flex-col items-center max-md:text-[.9em]"
          >
            <div className="mt-[1.8em] max-md:mt-0">
              <div className="flex gap-[4em] mb-[2.5em] max-md:gap-0 max-md:mb-0 max-md:flex-col">
                <div className="w-[22em] flex flex-col gap-[0.5em] max-md:gap-0">
                  <label className="font-calibri font-bold text-[1.25em]">
                    Nome
                  </label>
                  <input
                    className="h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </div>
                <div className="w-[9.375em] flex flex-col gap-[0.5em] max-md:gap-0">
                  <label className="font-calibri font-bold text-[1.25em]">
                    Preço
                  </label>
                  <input
                    className="placeholder:text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                    type="number"
                    placeholder="R$ 0,00"
                    value={price}
                    onChange={({ target }) => setPrice(target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between mb-[2.5em] max-md:mb-0 max-md:flex-col">
                <div className="w-[15.625em] flex flex-col gap-[0.5em] max-md:gap-0">
                  <label className="font-calibri font-bold text-[1.25em]">
                    Categoria
                  </label>
                  <select
                    value={category}
                    onChange={({ target }) => setCategory(target.value)}
                    className="text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                  >
                    {Object.values(Categories).map(category => (
                      <option
                        disabled={category === 'Selecione a categoria'}
                        key={category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[15.625em] flex flex-col gap-[0.5em] max-md:gap-0">
                  <label className="font-calibri font-bold text-[1.25em]">
                    Quantidade
                  </label>
                  <input
                    className="placeholder:text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                    type="number"
                    placeholder="0"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[0.5em] max-md:gap-0">
                <label className="font-calibri font-bold text-[1.25em]">
                  Descrição
                </label>
                <textarea
                  className="resize-none h-[5.75em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                />
              </div>
              <button
                disabled={loading}
                className="mt-[1em] h-[2.813em] w-full bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e] disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? 'Carregando' : 'Adicionar Produto'}
              </button>
              <span className="block float-right text-red-600 font-bold">
                {error}
              </span>
            </div>
          </form>
        )}
      </section>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </>
  );
};

export default Admin;
