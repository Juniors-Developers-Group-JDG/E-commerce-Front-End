import Link from 'next/link';

const Login = () => {
  return (
    <section className="min-h-[70%] flex items-center">
      <div className="flex justify-around w-full max-md:flex-col max-md:items-center max-md:text-[.8em] max-md:gap-[4em] max-md:my-[4em]">
        <div>
          <h4 className="text-[3em] font-calibri leading-[.8em]">
            Possui uma conta?
          </h4>
          <span className="text-[#3282B8] font-calibri">
            Informe os dados para acessa-la
          </span>
          <form className="flex flex-col mb-[1em]">
            <input
              className="w-[21.875em] h-[3.669em] bg-[#000000] text-[#ffffff] rounded-[.25em] mt-[1.313em] mb-[1.875em] p-[1em]"
              type="text"
              placeholder="Login"
            />
            <input
              className="w-[21.875em] h-[3.669em] bg-[#000000] text-[#ffffff] rounded-[.25em] p-[1em]"
              type="text"
              placeholder="Senha"
            />
            <div className="my-[1em]">
              <label className="flex gap-[.5em]">
                <input type="checkbox" name="user-data" />
                Lembrar meus dados
              </label>
            </div>
            <input
              type="submit"
              value="Acessar"
              className="bg-[#3282B8] font-bold text-[2.25em] text-[#ffffff] uppercase rounded-[.25em] cursor-pointer transition-all hover:bg-[#276690]"
            />
          </form>
          <Link
            className="font-calibri text-[1.125em] text-[#000033] transition-all hover:text-[#276690]"
            href={'/forgot'}
          >
            Esqueci a minha senha
          </Link>
        </div>
        <div className="flex flex-col">
          <h4 className="font-calibri text-[2.5em] text-[#000033] leading-[.8em]">
            Não tem uma conta?
          </h4>
          <span className="font-calibri text-[#3282B8]">Criar agora.</span>
          <Link
            className="font-calibri bg-[#BBE1FA] font-bold text-[#000033] text-[2.25em] rounded-[.25em] text-center uppercase mt-[1.5em] transition-all hover:bg-[#9BD3F8]"
            href={'/register'}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
