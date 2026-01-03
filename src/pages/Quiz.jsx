import React from "react";
import CommanAdd from "../components/CommanAdd";
import CommonList from "../components/CommonList";

function Quiz() {
  const quizData = [
    {
      id: "1",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "2",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "3",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "4",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "5",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
    {
      id: "6",
      category: "Science",
      totalQuestion: "100",
      publisher: "Dammar Bhatt",
      image:
        "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_se_enriched&w=740&q=80",
      description: "this is a quiz related science subject",
    },
  ];

  const handleUpdate = (item) => {
    console.log(item);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleAdd = () => {
    console.log("quiz added");
  };

  return (
    <>
      <CommanAdd
        heading={"Welcome to Quiz Section"}
        buttonName={"Add quiz"}
        handleAdd={handleAdd}
      />
      {quizData.map((item) => (
        <CommonList
          key={item.id}
          item={item}
          hadleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}

export default Quiz;
