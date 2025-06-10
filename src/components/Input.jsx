function Input({ id, label, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onChange} data-key={data - key} />
    </>
  );
}

export default Input;
