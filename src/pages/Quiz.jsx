import React, { useState } from "react";
import CommanAdd from "../components/CommanAdd";
import AddQuizModal from "../components/AddQuizModal";
import CommonList from "../components/CommonList";

function Quiz() {
  const [showModal, setShowModal] = useState(false);

  const handleAddData = (data)=>{
    
  }
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
      {/* {quizData.map((item) => (
        <CommonList
          key={item.id}
          item={item}
          hadleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))} */}
    </>
  );
}

export default Quiz;
