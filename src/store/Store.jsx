import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload.note];
    case "UPDATE_NOTE":
      return state.map((item) =>
        item.id === action.payload.UpdatedNote.id
          ? action.payload.UpdatedNote
          : item
      );
    case "DELETE_NOTE":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      publisher: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      publisher: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "3",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description:
        "This is the complete note of the Project and organizational...",
      chips: ["Notes", "Sem 6", "POM"],
      publisher: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
    {
      id: "4",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHtZPSHvUUXpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681723080465?e=2147483647&v=beta&t=NUXPBf37D808LEVTyMnbNXA4sJRVOgU1xysxI-M7dvc",
      topPill: "Theory",
      title: "POM",
      description: "This is picture related OS",
      chips: ["Notes", "Sem 6", "POM"],
      publisher: "Dammar Bhatt",
      authorSub: "",
      rating: "4.0",
      ratingCount: 2,
      date: "Nov 9, 2025",
    },
  ]);

  const AddNotes = (note) => {
    console.log("Store", note);

    const addNote = {
      type: "ADD_NOTE",
      payload: {
        note,
      },
    };
    dispatch(addNote);
  };

  const UpdateNote = (UpdatedNote) => {
    console.log("store:", UpdatedNote);

    dispatch({
      type: "UPDATE_NOTE",
      payload: {
        UpdatedNote,
      },
    });
  };

  const DeleteNote = (id) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: {
        id,
      },
    });
  };

  return (
    <StoreContext.Provider value={{ notes, AddNotes, UpdateNote, DeleteNote }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
