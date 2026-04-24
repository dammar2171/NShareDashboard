import { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
  category: "",
  image: "",
  description: "",
  publisher: "",
};

const QuizUpdateModal = ({ show, onClose, onUpdate, quiz }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  // when quiz prop arrives, pre-fill the form with existing data
  useEffect(() => {
    if (quiz) {
      setFormData({
        category: quiz.category || "",
        image: quiz.image_url || "",
        description: quiz.description || "",
        publisher: quiz.publisher || "",
      });
      setQuestions(
        quiz.questions?.length > 0
          ? quiz.questions
          : [{ question: "", answer: "" }],
      );
    }
  }, [quiz]); // runs every time a different quiz is passed in

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
      const res = await axios.put(
        `http://localhost:5000/quiz/updateQuiz/${quiz.id}`,
        { ...formData, questions },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (res.status === 200) {
        console.log(res.data.quiz);

        onUpdate(res.data.quiz);
        alert(res.data.message);
        setFormData(initialFormData);
        setQuestions([{ question: "", answer: "" }]);
      }
      onClose();
    } catch (error) {
      console.log("UPDATE_ERROR:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box" style={{ marginTop: "400px" }}>
        <h3>Update Quiz</h3>

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
            name="image"
            placeholder="Image URL"
            value={formData.image}
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
              Update Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizUpdateModal;
