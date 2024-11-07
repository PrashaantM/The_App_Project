// src/Notes.jsx
import React, { useState } from 'react';

const Notes = () => {
  // State to hold the categories and their notes
  const [categories, setCategories] = useState({
    Personal: [],
    Lecture: []
  });
  
  // State to manage active category
  const [activeCategory, setActiveCategory] = useState('Personal');

  // State to handle new note input and title
  const [newNote, setNewNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  // Handle change in note content
  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  // Handle change in note title
  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  // Handle adding a new note
  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim() !== '' && noteTitle.trim() !== '') {
      const newNoteObj = { title: noteTitle, content: newNote };
      setCategories((prev) => ({
        ...prev,
        [activeCategory]: [...prev[activeCategory], newNoteObj],
      }));
      setNewNote('');
      setNoteTitle('');
    }
  };

  // Handle deleting a note
  const handleDeleteNote = (index) => {
    const updatedNotes = categories[activeCategory].filter((_, i) => i !== index);
    setCategories((prev) => ({
      ...prev,
      [activeCategory]: updatedNotes,
    }));
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <h2>Add New Note</h2>
        <form onSubmit={handleAddNote}>
          <input
            type="text"
            value={noteTitle}
            onChange={handleTitleChange}
            placeholder="Note Title"
            required
          />
          <textarea
            value={newNote}
            onChange={handleNoteChange}
            placeholder="Add your note"
            required
            rows="3"
            style={{ width: '100%' }}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>

      <div>
        <h2>Categories</h2>
        <div>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{
                margin: '0 5px',
                backgroundColor: activeCategory === category ? '#007BFF' : '#f0f0f0',
                color: activeCategory === category ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2>{activeCategory} Notes</h2>
        {categories[activeCategory].length === 0 ? (
          <p>No notes available in this category.</p>
        ) : (
          categories[activeCategory].map((note, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h4>{note.title}</h4>
              <textarea
                value={note.content}
                readOnly
                rows="3"
                style={{ width: '100%' }}
              />
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
