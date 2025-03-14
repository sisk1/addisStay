function PaginationButton({ children, onClick, disabled }) {
  return (
    <button
      className="flex items-center gap-2 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
