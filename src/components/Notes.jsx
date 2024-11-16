import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    // Fetch notes from API or Firebase (simulated here)
    setNotes([
      { id: 1, content: 'Study for the upcoming test on cardiovascular health.' },
      { id: 2, content: 'Review notes on anatomy chapter 5.' },
    ]);
  }, []);

  const handleAddNote = () => {
    if (newNote) {
      setNotes([...notes, { id: notes.length + 1, content: newNote }]);
      setNewNote('');
    }
  };

  return (
    <div>
      <h3>Study Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notes;
