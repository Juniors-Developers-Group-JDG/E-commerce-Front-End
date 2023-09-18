interface CartButtonProps {
  children: React.ReactNode;
}

const CartButton = ({ children }: CartButtonProps) => {
  return <button>{children}</button>;
};

export default CartButton;
