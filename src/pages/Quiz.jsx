import React, { useContext, useState } from "react";
import CommanAdd from "../components/CommanAdd";
import AddQuizModal from "../components/AddQuizModal";
import CommonList from "../components/CommonList";
import { StoreContext } from "../store/Store";
import axios from "axios";
import QuizUpdateModal from "../components/QuizUpdateModal";

function Quiz() {
  const { AddQuiz, quizs, DeleteQuiz, UpdateQuiz } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleAddData = (data) => {
    AddQuiz(data);
  };

  const handleUpdate = (data) => {
    setSelectedQuiz(data);
    setShowUpdateModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/quiz/deleteQuiz/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (response.status === 200) {
        DeleteQuiz(response.data.deletedId);
        alert(response.data.message);
      }
    } catch (error) {
      console.log("DELETE_ERROR:", error);
    }
  };

  return (
    <>
      <CommanAdd
        heading={"Welcome to Quiz Section"}
        buttonName={"Add quiz"}
        handleAdd={() => setShowModal(true)}
      />

      <AddQuizModal
        onSave={handleAddData}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
      {showUpdateModal && (
        <QuizUpdateModal
          onUpdate={(updatedQuiz) => UpdateQuiz(updatedQuiz)}
          quiz={selectedQuiz}
          onClose={() => setShowUpdateModal(false)}
          show={showUpdateModal}
        />
      )}

      {quizs.map((item) => (
        <CommonList
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}

export default Quiz;
