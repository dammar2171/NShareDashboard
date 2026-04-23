import React, { useContext, useState } from "react";
import CommanAdd from "../components/CommanAdd";
import AddQuizModal from "../components/AddQuizModal";
import CommonList from "../components/CommonList";
import { StoreContext } from "../store/Store";

function Quiz() {
  const { AddQuiz, quizs } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);
  console.log("quiz at quiz page:", quizs);

  const handleAddData = (data) => {
    AddQuiz([...quizs, data]);
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
      {quizs.map((item) => (
        <CommonList
          key={item.id}
          item={item}
          // hadleDelete={handleDelete}
          // handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}

export default Quiz;
