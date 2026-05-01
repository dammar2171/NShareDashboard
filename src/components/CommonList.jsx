import { useLocation } from "react-router-dom";
function CommonList({ item, handleUpdate, handleDelete }) {
  const location = useLocation();

  return (
    <div className="notes-list">
      <ul>
        <li>
          {location.pathname != "/notice" && <img src={item.image} alt="" />}

          <div className="detail">
            <h4>{item.title}</h4>
            <p>Description:{item.description}</p>
            <p className="text-danger">Publisher:{item.publisher}</p>
          </div>
          <div className="action-btn">
            {location.pathname != "/notice" && (
              <button onClick={() => handleUpdate(item)}>Edit</button>
            )}
            {location.pathname === "/notice" && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (item.file_url) {
                    window.open(item.file_url, "_blank");
                  } else {
                    alert("No file available");
                  }
                }}
              >
                View Detail
              </button>
            )}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CommonList;
