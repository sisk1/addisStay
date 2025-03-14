function Overlay({ children, ref }) {
  return (
    <div
      className="fixed left-0 top-0 z-50 h-[100vh] w-full bg-black/30 backdrop-blur-sm transition-all duration-500"
      ref={ref}
    >
      {children}
    </div>
  );
}

export default Overlay;
