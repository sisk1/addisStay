function CheckboxRow({ children, label, size }) {
  return (
    <div
      className={`flex items-center ${size === "large" ? "gap-4" : "gap-2"}`}
    >
      {children}
      <label htmlFor={children?.props?.id} className="whitespace-nowrap">
        {label}
      </label>
    </div>
  );
}

export default CheckboxRow;
