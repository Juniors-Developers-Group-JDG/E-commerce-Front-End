import Image from 'next/image';
import Link from 'next/link';

import cartImage from '@/assets/images/layout/cart.svg';
import searchImage from '@/assets/images/layout/tabbar-search.svg';
import userImage from '@/assets/images/layout/user.svg';

const TabBar = () => {
  return (
    <aside className="bg-[#FFFFFF] font-bold fixed bottom-0 flex items-center justify-evenly gap-[1.5em] z-10 w-full py-[.75em] border-t-solid border-t-[.2em] border-t-[#000033] md:hidden">
      <Link href={'/cart'}>
        <Image
          className="transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
          src={cartImage}
          width={32}
          height={32}
          alt="Imagem carrinho de compras"
          style={{ width: '2em', height: '2em' }}
        />
      </Link>
      <Link href={'/products'}>
        <Image
          className="transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full filter-blue"
          src={searchImage}
          width={32}
          height={32}
          alt="Imagem lupa"
          style={{ width: '2em', height: '2em' }}
        />
      </Link>
      <Link href={'/login'}>
        <Image
          className="transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
          src={userImage}
          width={32}
          height={32}
          alt="Imagem usuário"
          style={{ width: '2em', height: '2em' }}
        />
      </Link>
    </aside>
  );
};

export default TabBar;
