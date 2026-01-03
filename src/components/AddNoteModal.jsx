import { useState } from "react";
import "../css/AddNoteModal.css";

function AddNoteModal({ show, onClose, onSave }) {
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

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      image: formData.image,
      topPill: formData.topPill,
      title: formData.title,
      description: formData.description,
      chips: formData.chips.split(","),
      publisher: formData.publisher,
      rating: formData.rating,
      ratingCount: 0,
      date: new Date().toDateString(),
      authorSub: "",
      pdfFile,
    };

    onSave(newNote);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Add New Note</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
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
            placeholder="Category (Theory / Practical)"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="chips"
            placeholder="Tags (comma separated)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="publisher"
            placeholder="Publisher Name"
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (eg. 4.0)"
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNoteModal;
