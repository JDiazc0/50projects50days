import React, { useState, useEffect } from "react";
import "./NoteApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";
import { marked } from "marked";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (text = "") => {
    setNotes([...notes, text]);
  };

  const updateNote = (index, text) => {
    const newNotes = [...notes];
    newNotes[index] = text;
    setNotes(newNotes);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <section id="33" className="section-NoteApp">
      <FloatingButton
        day="33"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day33"
        position="left"
      />
      <button className="btn-day33" onClick={() => addNewNote()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {notes.map((note, index) => (
        <Note
          key={index}
          text={note}
          onUpdate={(text) => updateNote(index, text)}
          onDelete={() => deleteNote(index)}
        />
      ))}
    </section>
  );
}

function Note({ text, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(!text);
  const [noteText, setNoteText] = useState(text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setNoteText(e.target.value);
    onUpdate(e.target.value);
  };

  return (
    <div className="note">
      <div className="tools">
        <button className="edit" onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="delete" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      <div className={`main ${isEditing ? "hidden" : ""}`}>
        <span dangerouslySetInnerHTML={{ __html: marked(noteText) }}></span>
      </div>
      <textarea
        className={`${isEditing ? "" : "hidden"}`}
        value={noteText}
        onChange={handleChange}
      />
    </div>
  );
}
