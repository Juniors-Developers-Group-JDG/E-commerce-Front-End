'use client';

import { useState } from 'react';
import RegisterInput from './RegisterInput';

const RegisterForm = () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="bg-[#ffffff] w-[18.75em] p-7 rounded-xl">
      <h2 className="font-bold text-[1.5em] text-[#000033] text-center mb-5">
        Crie sua conta
      </h2>
      <form onSubmit={event => event.preventDefault()}>
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
          id="confirmPassword"
          placeholder="Confirmar senha"
          isPassword
        />

        <label
          htmlFor="sitePrivacy"
          className="text-[.5em] flex items-center gap-1 mb-4 cursor-pointer group"
        >
          <span
            className="w-4 h-4 border-2 border-[#BBE1FA] rounded-sm transition-all group-hover:border-[#3282B8]"
            style={{ backgroundColor: checkbox ? '#000033' : 'transparent' }}
          />
          <input
            type="checkbox"
            name="sitePrivacy"
            id="sitePrivacy"
            className="hidden"
            checked={checkbox}
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Declaro que concordo com a <strong>política de privacidade </strong>do
          site.
        </label>

        <button className="w-full text-white font-bold text-[.875em] bg-[#3282B8] py-1 rounded outline-[#BBE1FA] transition-all hover:scale-105">
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
