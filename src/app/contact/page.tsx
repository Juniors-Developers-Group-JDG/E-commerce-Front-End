'use client';

import Image from 'next/image';

import GoogleBlueButton from '@/assets/images/contact-page/google-blue-button.svg';
import LinkedinBluebutton from '@/assets/images/contact-page/linkedin-blue-button.svg';
import TwitterBluebutton from '@/assets/images/contact-page/twitter-blue-button.svg';
import Footer, { designer_thaissa } from '@/components/Layout/Footer';

const Contact = () => {
  return (
    <>
      <main className="flex-1 max-md:mt-[6em]">
        <div className="py-10">
          <h1 className="text-black text-5xl font-medium text-center">
            Contato
          </h1>
        </div>
        <div className="flex justify-evenly max-lg:flex-col max-lg:items-center max-lg:gap-[4em]">
          <div className="w-auto max-lg:text-center">
            <p className="text-black text-2xl font-medium mb-10 max-md:text-[1.2em]">
              Tire suas dúvidas preenchendo o formulário.
            </p>
            <p className="text-black text-2xl font-medium max-md:text-[1.2em]">
              123, Algum Lugar do Brasil, Brasil.
            </p>
            <p className="text-black text-2xl font-medium my-3 max-md:text-[1.2em]">
              +55 99 92934-2931
            </p>
            <p className="text-black text-2xl font-medium mb-10 max-md:text-[1.2em]">
              contact@contact.com
            </p>
            <span className="flex flex-row gap-8 max-lg:flex max-lg:justify-center">
              <Image
                src={TwitterBluebutton}
                width={50}
                height={50}
                alt="Botão com logo do Twitter"
              />
              <Image
                src={LinkedinBluebutton}
                width={50}
                height={50}
                alt="Botão com logo do Linkedin"
              />
              <Image
                src={GoogleBlueButton}
                width={50}
                height={50}
                alt="Botão com logo da Google"
              />
            </span>
          </div>
          <div className="flex flex-col w-auto h-fit gap-[.5em] max-md:w-[75%]">
            <input
              type="text"
              placeholder="Nome"
              className="outline rounded-sm pl-[0.813em] py-[.8em]"
            />
            <input
              type="email"
              name="email"
              id="iemail"
              placeholder="Email"
              className="outline rounded-sm my-[1.063em] pl-[0.813em] py-[.8em]"
            />
            <textarea
              name="textarea"
              id="itextarea"
              cols={40}
              rows={200}
              style={{ resize: 'none' }}
              className="outline rounded-sm pl-[0.813em] pt-[0.938em] h-[10em]"
              placeholder="Escreva o que você gostaria de nos dizer."
            ></textarea>
            <button className="px-[1.75em] py-[0.75em] mt-[1.063em] rounded-md text-center border-0 bg-[#0D1351] text-white my-5 self-end">
              Enviar mensagem
            </button>
          </div>
        </div>
      </main>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </>
  );
};

export default Contact;
