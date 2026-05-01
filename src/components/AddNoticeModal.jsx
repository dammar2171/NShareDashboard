import { useState } from "react";
import axios from "axios";

const initialFormData = {
  description: "",
  publisher: "",
  date: "",
  hashtags: "",
};

const AddNoticeModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState(null);
  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hashtagArray = formData.hashtags
      .split(" ")
      .filter((tag) => tag.startsWith("#"))
      .map((tag) => tag.replace("#", "").trim());

    const data = new FormData();
    data.append("description", formData.description);
    data.append("publisher", formData.publisher);
    data.append("date", formData.date);
    data.append("hashtags", JSON.stringify(hashtagArray));
    if (file) data.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/notice/addNotice",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (res.status === 201) {
        onSave(res.data.notice);
        alert(res.data.message);
        setFormData(initialFormData);
        setFile(null);
      }
      onClose();
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Add Notice</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="publisher"
            placeholder="Publisher Name"
            value={formData.publisher}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="hashtags"
            placeholder="#exam #urgent #holiday"
            value={formData.hashtags}
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="modal-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save Notice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoticeModal;
