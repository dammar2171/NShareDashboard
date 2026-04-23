import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import axios from "axios";

export const StoreContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTE":
      return action.payload.note;
    case "ADD_NOTE":
      return [...state, action.payload.note];
    case "UPDATE_NOTE":
      return state.map((item) =>
        item.id === action.payload.UpdatedNote.id
          ? action.payload.UpdatedNote
          : item,
      );
    case "DELETE_NOTE":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ":
      return action.payload.quiz;
    case "ADD_QUIZ":
      return [...state, action.payload.quiz];
    case "UPDATE_QUIZ":
      return state.map((item) =>
        item.id === action.payload.UpdatedQuiz.id
          ? action.payload.UpdatedQuiz
          : item,
      );
    case "DELETE_QUIZ":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [quizs, dispatchQuiz] = useReducer(quizReducer, []);

  const [authenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });
  // Notes Actions
  const AddNotes = (note) => {
    const addNote = {
      type: "ADD_NOTE",
      payload: {
        note,
      },
    };
    dispatch(addNote);
  };

  const UpdateNote = (UpdatedNote) => {
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

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await axios.get(
          "http://localhost:5000/notes/fetchNotes",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        dispatch({
          type: "SET_NOTE",
          payload: {
            note: response.data.data,
          },
        });
      } catch (error) {
        console.log("FETCH_ERROR:", error);
      }
    }
    if (authenticated) {
      fetchNote();
    }
  }, [authenticated]);

  // Quiz Actions
  const AddQuiz = (quiz) => {
    dispatchQuiz({
      type: "SET_QUIZ",
      payload: {
        quiz,
      },
    });
  };
  return (
    <StoreContext.Provider
      value={{
        notes,
        quizs,
        authenticated,
        setAuthenticated,
        AddNotes,
        UpdateNote,
        DeleteNote,
        AddQuiz,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
