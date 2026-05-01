import { useState } from "react";
import AddNoticeModal from "../components/AddNoticeModal";
import CommanAdd from "../components/CommanAdd";
import CommonList from "../components/CommonList";
import { useContext } from "react";
import { StoreContext } from "../store/Store";

function Notice() {
  const { AddNotice, DeleteNotice, notices } = useContext(StoreContext);

  const [showModal, setShowModal] = useState(false);
  const handleDelete = async (id) => {
    console.log("ID:", id);
    try {
      const response = await fetch(
        `http://localhost:5000/notice/deleteNotice/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      console.log("Response:", response);
      if (response.status === 200) {
        DeleteNotice(id);
        console.log(response.data.deletedId);

        alert(response.data.message);
      } else {
        console.log("Failed to delete notice");
      }
    } catch (error) {
      console.log("DELETING_NOTICE_ERROR:", error);
    }
  };
  const handleAdd = () => {
    setShowModal(true);
  };
  const handleAddNotice = (notice) => {
    AddNotice(notice);
    setShowModal(false);
  };
  return (
    <>
      <CommanAdd
        heading={"Welcome to Notice Section"}
        buttonName={"Add Notice"}
        handleAdd={handleAdd}
      />
      <AddNoticeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddNotice}
      />
      {notices.map((item) => (
        <CommonList key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  );
}

export default Notice;
