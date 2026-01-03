function CommonList({ item, handleUpdate, hadleDelete }) {
  return (
    <div className="notes-list">
      <ul>
        <li>
          <img src={item.image} alt="" />{" "}
          <div className="detail">
            <h4>{item.title}</h4>
            <p>Description:{item.description}</p>
            <p className="text-danger">Publisher:{item.publisher}</p>
          </div>
          <div className="action-btn">
            <button onClick={() => handleUpdate(item)}>Update</button>
            <button onClick={() => hadleDelete(item.id)}>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CommonList;
