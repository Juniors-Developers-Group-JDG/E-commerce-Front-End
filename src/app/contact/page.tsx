'use client';

import Image from 'next/image';

import GoogleBlueButton from '@/assets/images/google-blue-button.svg';
import LinkedinBluebutton from '@/assets/images/linkedin-blue-button.svg';
import TwitterBluebutton from '@/assets/images/twitter-blue-button.svg';
import Footer, { designer_thaissa } from '@/components/Layout/Footer';

const Contact = () => {
  return (
    <main>
      <div className="py-10">
        <h1 className="text-black text-5xl font-medium text-center">Contato</h1>
      </div>
      <div>
        <div className="mx-28">
          <p className="text-black text-2xl font-medium pb-10">
            Tire suas dúvidas preenchendo o formulário.
          </p>
          <p className="text-black text-2xl font-medium">
            123, Algum Lugar do Brasil, Brasil.
          </p>
          <p className="text-black text-2xl font-medium py-3">
            +55 99 92934-2931
          </p>
          <p className="text-black text-2xl font-medium pb-10">
            contact@contact.com
          </p>
          <span className="flex flex-row gap-8">
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
        <div></div>
      </div>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </main>
  );
};

export default Contact;
