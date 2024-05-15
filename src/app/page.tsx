"use client";

import Note from "./Note";
import CreateArea from "./CreateArea";
import {useState} from 'react';

export default function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote: any) {
    setNotes((prevNotes: any) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: any) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  )
}