import { CreatedProduct } from '@/app/admin/page';

type ImageFormProps = {
  createdProduct: CreatedProduct;
  handleGetBackClick: () => void;
};

const ImageForm = ({ createdProduct, handleGetBackClick }: ImageFormProps) => {
  return (
    <div className="bg-[#ffffff] px-8 py-16 w-[41.25em] h-[31.25em] flex flex-col items-center max-md:text-[.9em] relative">
      <button
        onClick={handleGetBackClick}
        className="absolute top-0 right-0 py-3 px-6 bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690] disabled:bg-[#788e9e]"
      >
        Voltar
      </button>
      <span className="absolute top-0 left-0 py-3 px-6 font-bold text-[1.15em] text-green-600">
        Produto criado com sucesso!
      </span>
      <h2 className="font-bold text-[1.35em] mt-4">
        Adicione a(s) imagem(ns) para seu produto
      </h2>
      {createdProduct._id}
    </div>
  );
};

export default ImageForm;
