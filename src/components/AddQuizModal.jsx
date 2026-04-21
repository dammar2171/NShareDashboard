import { useEffect, useState } from "react";
import axios from "axios";
const AddQuizModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    category: "",
    imageUrl: "",
    description: "",
    publisher: "",
  });

  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = questions.map((q, i) =>
      i === index ? { ...q, [field]: value } : q,
    );
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(
        "http://localhost:5000/quiz/addQuiz",
        {
          ...formData,
          questions,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      onSave({ ...formData, questions });
      onClose();
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Add New Quiz</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />

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
          />

          {questions.map((item, index) => (
            <div className="qn" key={index}>
              <span className="qn-label">Q{index + 1}:</span>

              <input
                type="text"
                placeholder="Question"
                value={item.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
                required
              />

              <input
                type="text"
                placeholder="Answer"
                value={item.answer}
                onChange={(e) =>
                  handleQuestionChange(index, "answer", e.target.value)
                }
                required
              />
              {questions.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeQuestion(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn btn-primary"
            onClick={addQuestion}
          >
            + Add question
          </button>

          <div className="modal-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuizModal;
