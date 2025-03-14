function TextButton({ onClick, children }) {
  return (
    <button
      className="text-indigo-600 transition-colors duration-300 hover:text-indigo-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextButton;
