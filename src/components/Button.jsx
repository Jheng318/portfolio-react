function Button({ onClick, children, id }) {
  return (
    <button onClick={onClick} id={id} className="btn">
      {children}
    </button>
  );
}

export default Button;
