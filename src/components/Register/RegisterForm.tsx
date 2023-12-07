'use client';

import { useState } from 'react';
import RegisterInput from './RegisterInput';

const RegisterForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [existingEmails, setExistingEmails] = useState([]);

  const handleRegister = async () => {
    try {
      const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (!validateEmail(email)) {
        setEmailError('O formato do e-mail é inválido');
        return;
      }

      if (existingEmails.some(existingEmail => existingEmail === email)) {
        setEmailError('Este endereço de e-mail já está em uso.');
        return;
      }

      const urlRegister = 'https://e-commerce-backend-am7w.onrender.com/api/users/register/';

      const response = await fetch(urlRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword: confirmPassword,
        }),
      });

      if (response.ok) {
        console.log('YEAAAH! This user was registered.');
      } else {
        console.error('Sorry! Failed finish your registration.');
      }
    } catch (error) {
      console.log(`Error: `, error);
    }
  };

  return (
    <div className="bg-[#ffffff] w-[18.75em] p-7 rounded-xl">
      <h2 className="font-bold text-[1.5em] text-[#000033] text-center mb-5">
        Crie sua conta
      </h2>
      <form onSubmit={event => event.preventDefault()} method="post">
        <RegisterInput
          type="text"
          label="Nome"
          id="name"
          placeholder="Seu nome completo"
          onChange={e => setName(e.target.value)}
        />
        <RegisterInput
          type="email"
          label="Email"
          id="email"
          placeholder="Seu melhor email"
          onChange={e => {
            setEmail(e.target.value);
            setEmailError('');
          }}
        />
        {emailError && <p className="text-red">{emailError}</p>}
        <RegisterInput
          type="password"
          label="Senha"
          id="password"
          isPassword
          onChange={e => setPassword(e.target.value)}
        />
        <RegisterInput
          type="password"
          label="Confirmar senha"
          id="confirmPassword"
          isPassword
          onChange={e => setConfirmPassword(e.target.value)}
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
          <span>
            Declaro que concordo com a <strong>política de privacidade</strong>{' '}
            do site.
          </span>
        </label>

        <button
          className="w-full text-white font-bold text-[.875em] bg-[#3282B8] py-1 rounded outline-[#BBE1FA] transition-all hover:scale-105"
          onClick={handleRegister}
        >
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
