'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

import RegisterInput from './RegisterInput';

import 'react-toastify/ReactToastify.css';

const RegisterForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [existingEmails, setExistingEmails] = useState([]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const nameForm = formData.get('name') as string;
      const emailForm = formData.get('email') as string;
      const passwordForm = formData.get('password') as string;
      const confirmPasswordForm = formData.get('confirmPassword') as string;

      const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (!validateEmail(email)) {
        setEmailError('O formato do e-mail é inválido');
        toast.info('Informe seu email!');
        return;
      }

      // if (existingEmails.some(existingEmail => existingEmail === email)) {
      //   setEmailError('Este endereço de e-mail já está em uso.');
      //   return;
      // }

      if (
        nameForm &&
        emailForm &&
        passwordForm &&
        confirmPasswordForm &&
        checkbox
      ) {
        const urlRegister =
          'https://e-commerce-backend-am7w.onrender.com/api/users/register/';

        const response = await fetch(urlRegister, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
          }),
        });

        if (response.ok) {
          toast.success('Usuário criado com sucesso!');
          console.log('YEAAAH! This user was registered.');
        } else {
          toast.error('Algo deu errado no seu cadastro!');
          console.error('Sorry! Failed finish your registration.');
        }
      } else {
        toast.info('Insira todos os campos!');
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
      <form onSubmit={handleRegister} method="post">
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

        <input
          type="submit"
          className="w-full text-white font-bold text-[.875em] bg-[#3282B8] py-1 rounded outline-[#BBE1FA] cursor-pointer transition-all hover:scale-105"
          value={'Criar conta'}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
