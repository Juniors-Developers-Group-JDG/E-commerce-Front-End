interface CategoriesExpandButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const CategoriesExpandButton = ({
  children,
  isDisabled,
}: CategoriesExpandButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: `rgba(217, 217, 217, ${isDisabled ? '0.1' : '0.4'})`,
      }}
      className="rounded-full w-12 h-12 flex items-center justify-center hover:scale-[1.125] transition-all"
    >
      {children}
    </button>
  );
};

export default CategoriesExpandButton;
