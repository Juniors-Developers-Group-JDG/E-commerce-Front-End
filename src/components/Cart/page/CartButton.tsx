'use client';

interface CartButtonProps {
  children: React.ReactNode;
  type: 'SUCCESS' | 'NEUTRAL';
}

const CartButton = ({ children, type = 'NEUTRAL' }: CartButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: `${type === 'SUCCESS' && '#2EE356'}`,
      }}
      className="flex items-center justify-center p-1 bg-[#AFAFAF66] rounded-md h-[2.375em] w-[2.375em] transition-all hover:scale-[1.1] max-lg:h-[1.5em] max-lg:w-[1.5em]"
    >
      {children}
    </button>
  );
};

export default CartButton;
