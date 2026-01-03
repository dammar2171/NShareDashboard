import { useContext, useEffect, useState } from "react";
import "../css/AddNoteModal.css";
import { StoreContext } from "../store/Store";

function UpdateNoteModal({ show, onClose, note }) {
  const { UpdateNote } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    image: "",
    topPill: "",
    title: "",
    description: "",
    chips: "",
    publisher: "",
    rating: "",
  });

  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    if (note) {
      setFormData({
        image: note.image || "",
        topPill: note.topPill || "",
        title: note.title || "",
        description: note.description || "",
        chips: note.chips ? note.chips.join(",") : "",
        publisher: note.publisher || "",
        rating: note.rating || "",
      });
    }
  }, [note]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNote = {
      ...note,
      image: formData.image,
      topPill: formData.topPill,
      title: formData.title,
      description: formData.description,
      chips: formData.chips.split(","),
      publisher: formData.publisher,
      rating: formData.rating,
      pdfFile,
    };

    console.log(updatedNote);

    UpdateNote(updatedNote);
    alert("note updated sucessfully");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Update Note</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />

          <input
            type="text"
            name="topPill"
            value={formData.topPill}
            placeholder="Category (Theory / Practical)"
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            rows="3"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="chips"
            value={formData.chips}
            placeholder="Tags (comma separated)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            placeholder="Publisher Name"
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            placeholder="Rating (eg. 4.0)"
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateNoteModal;
