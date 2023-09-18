'use client';

interface CartButtonProps {
  children: React.ReactNode;
  type: 'SUCCESS' | 'NEUTRAL' | 'DANGER';
}

const CartButton = ({ children, type = 'NEUTRAL' }: CartButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-1 bg-[#AFAFAF66] rounded-md min-h-[2.375em] min-w-[2.375em] transition-all hover:scale-[1.1] ${
        type === 'SUCCESS' && 'bg-[#2EE356]'
      } ${type === 'DANGER' && 'bg-transparent'}`}
    >
      {children}
    </button>
  );
};

export default CartButton;
