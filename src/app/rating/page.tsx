import Rating_Product from '@/components/Product/Rating_Product';
import Comments_Products from '@/components/Product/Comments_Product';
import xbox from '@/assets/images/xbox.jpg';

const Rating = () => {

  const numberOfComments = [
    {id: 1,comment: "Ótimo custo, boa imagem,fácil instalação",data_comment:"20/09/2021",likes: 30, deslikes:2, image:xbox, nota: 4.3},
    {id: 2,comment: "Ótimo custo, boa imagem,fácil instalação",data_comment:"20/09/2021",likes: 30, deslikes:2, image:xbox, nota: 4},
    {id: 3,comment: "Ótimo custo, boa imagem,fácil instalação",data_comment:"20/09/2021",likes: 30, deslikes:2, image:xbox, nota: 5}
  ];

  return (
    <main>
      <div className='flex mx-auto w-[90%] py-6'>
        <h2 className=' mx-auto text-center font-semibold text-3xl sm:'>Avaliações</h2>
      </div>
      <div className='flex flex-col md:flex-row md:justify-around md:w-[70%] mx-auto w-[90%] py-6'>
        <section>
          
          <Rating_Product nota={4.5} 
          quantidadeDeAvaliacoes={500} 
          avaliacoes1Estrelas={50} 
          avaliacoes2Estrelas={60} 
          avaliacoes3Estrelas={80} 
          avaliacoes4Estrelas={150} 
          avaliacoes5Estrelas={160}/>

        </section>

        <section>
          {numberOfComments.map(commentObj => (
              <Comments_Products
                id={commentObj.id}
                nota={commentObj.nota}
                key={commentObj.id}
                comment={commentObj.comment}
                data_comment={commentObj.data_comment}
                likes={commentObj.likes}
                deslikes={commentObj.deslikes}
                caminho={commentObj.image}
              />
            ))}
        </section>
      </div>
    </main>
  );
};

export default Rating;
