function CommanAdd({ heading, buttonName, handleAdd }) {
  return (
    <div className="note-button-container">
      <h3>{heading}</h3>
      <button onClick={handleAdd}>{buttonName}</button>
    </div>
  );
}

export default CommanAdd;
