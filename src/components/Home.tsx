import Image from 'next/image';
import Link from 'next/link';

import googlestore from '@/assets/images/googleplay_download.svg';
import appstore from '@/assets/images/appstore_download.svg';
import iphone from '@/assets/images/iphone.svg';

const Home = () => {
  return (
    <main>
        <section>
            <div>
                <div>
                    <h2>Baixe nosso aplicativo e use o cupom JDG para 20% de desconto na primeira compra</h2>
                    <p>Apresse-se! Este cupom é válido até o final do mês e só pode ser usado uma vez por usuário.</p>
                </div>
                <figure>
                    <Image
                        className=""
                        src={googlestore}
                        alt="Imagem do aplicativo na google store"
                    />
                    <Image
                        className=""
                        src={appstore}
                        alt="Imagem do aplicativo na app store"
                    />

                </figure>
            </div>

            <div>
                <figure>
                    <Image
                            className=""
                            src={iphone}
                            alt="Imagem de um smartphone"
                    />
                </figure>
            </div>

        </section> {/*Section informartivo*/}
        
       
    </main>
  );
};

export default Home;