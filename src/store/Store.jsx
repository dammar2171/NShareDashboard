import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import axios from "axios";

export const StoreContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTE":
      return action.payload.note;
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
  const [notes, dispatch] = useReducer(reducer, []);
  console.log(notes);

  const [authenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

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
          }
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

  return (
    <StoreContext.Provider
      value={{
        notes,
        authenticated,
        setAuthenticated,
        AddNotes,
        UpdateNote,
        DeleteNote,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
