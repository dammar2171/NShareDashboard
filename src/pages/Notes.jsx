import { useContext, useState } from "react";
import CommanAdd from "../components/CommanAdd";
import CommonList from "../components/CommonList";
import "../css/Common.css";
import { StoreContext } from "../store/Store";
import AddNoteModal from "../components/AddNoteModal";
import UpdateNoteModal from "../components/UpdateNoteModal";
const Notes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const { AddNotes, notes, DeleteNote } = useContext(StoreContext);
  const handleUpdate = (item) => {
    setSelectedNote(item);
    setShowUpdate(true);
  };
  const handleDelete = (id) => {
    DeleteNote(id);
  };
  const handleAdd = (note) => {
    AddNotes(note);
    setShowModal(false);
  };
  return (
    <>
      <CommanAdd
        heading={"Welcome to Notes Section"}
        buttonName={"AddNotes"}
        handleAdd={() => setShowModal(true)}
      />
      {notes.map((item, index) => (
        <CommonList
          item={item}
          key={index}
          hadleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
      <AddNoteModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAdd}
      />
      <UpdateNoteModal
        show={showUpdate}
        onClose={() => setShowUpdate(false)}
        note={selectedNote}
      />
    </>
  );
};

export default Notes;
