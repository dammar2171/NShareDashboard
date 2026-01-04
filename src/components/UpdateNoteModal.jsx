import { useContext, useEffect, useState } from "react";
import "../css/AddNoteModal.css";
import { StoreContext } from "../store/Store";
import axios from "axios";

function UpdateNoteModal({ show, onClose, note }) {
  const { UpdateNote } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    image: "",
    top_pill: "",
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
        top_pill: note.top_pill || "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("image", formData.image);
      form.append("top_pill", formData.top_pill);
      form.append("chips", JSON.stringify(formData.chips.split(",")));
      form.append("publisher", formData.publisher);
      form.append("rating", Number(formData.rating));

      if (pdfFile) {
        form.append("pdfFile", pdfFile);
      }

      const res = await axios.put(
        `http://localhost:5000/notes/updateNotes/${note.id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      UpdateNote(res.data.note);

      alert("Note updated successfully");
      onClose();
    } catch (error) {
      console.error("Updation_Error:", error.response?.data || error);
    }
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
            value={formData.top_pill}
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
