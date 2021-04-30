import Storage from './Storage';

let storage = null;

describe('storage', () => {
  beforeEach(() => {
    storage = new Storage();
  });

  it('saves queue note', () => {
    const newNote = {
      id: 1,
      content: 'abcdef',
      isUrgent: false,
    };

    storage.saveQueueNote(newNote);
    let wasNoteFound = false;
    const notes = storage.getQueueNotes();
    for (const note of notes) if (note.id === newNote.id) wasNoteFound = true;

    expect(wasNoteFound).toBe(true);
  });

  it('adds & deletes queue note', () => {
    const newNote = {
      id: 1,
      content: 'abcdef',
      isUrgent: true,
    };

    storage.saveQueueNote(newNote);
    storage.deleteQueueNote(newNote.id);
    const notes = storage.getQueueNotes();
    let wasNoteFound = false;
    for (const note of notes) if (note.id === newNote.id) wasNoteFound = true;

    expect(wasNoteFound).toBe(false);
  });
});
