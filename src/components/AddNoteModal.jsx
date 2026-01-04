import { useState } from "react";
import "../css/AddNoteModal.css";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("image", formData.image);
      form.append("topPill", formData.topPill);
      form.append("chips", JSON.stringify(formData.chips.split(",")));
      form.append("publisher", formData.publisher);
      form.append("rating", Number(formData.rating));
      form.append("ratingCount", 0);
      form.append("authorSub", "");

      if (pdfFile) {
        form.append("pdfFile", pdfFile);
      }

      const res = await axios.post(
        "http://localhost:5000/notes/addNotes",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const newNote = res.data.note || {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        topPill: formData.topPill,
        chips: formData.chips.split(","),
        publisher: formData.publisher,
        rating: Number(formData.rating),
        ratingCount: 0,
        authorSub: "",
        pdf_url: res.data.pdf_url,
        date: new Date().toDateString(),
      };

      onSave(newNote);
      onClose();
    } catch (error) {
      console.error("Error uploading note:", error.response?.data || error);
    }
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
