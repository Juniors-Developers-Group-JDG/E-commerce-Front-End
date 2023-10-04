import RegisterInput from './RegisterInput';

const RegisterForm = () => {
  return (
    <div className="bg-[#ffffff] max-w-[15.625em] px-6 py-5 rounded-xl">
      <h1 className="font-bold text-[1.5em] text-[#000033] text-center mb-5">
        Crie sua conta
      </h1>
      <form>
        <RegisterInput type="text" label="Nome" id="name" placeholder="Nome" />
        <RegisterInput
          type="email"
          label="Email"
          id="email"
          placeholder="Email"
        />
        <RegisterInput
          type="password"
          label="Senha"
          id="password"
          placeholder="Senha"
          isPassword
        />
        <RegisterInput
          type="password"
          label="Confirmar senha"
          id="name"
          placeholder="Confirmar senha"
          isPassword
        />
        <div className="flex items-center gap-1">
          <input type="checkbox" name="sitePrivacy" id="sitePrivacy" />
          <label htmlFor="sitePrivacy" className="text-[6.5px]">
            Declaro que concordo com a <strong>política de privacidade </strong>
            do site.
          </label>
        </div>
        <button className="w-full text-white font-bold text-[.75em] bg-[#3282B8] py-1 rounded outline-[#BBE1FA]">
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
