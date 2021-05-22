export default class Storage {
  static async saveQueueNote(newNote) {
    const { queueNotes: currentNotes } = await browser.storage.local.get({ queueNotes: [] });
    const newNotes = [...currentNotes, newNote];
    await browser.storage.local.set({ queueNotes: newNotes });
  }

  static async deleteQueueNote(noteId) {
    const { queueNotes: currentNotes } = await browser.storage.local.get({ queueNotes: [] });
    const newNotes = currentNotes.filter((note) => note.id !== noteId);
    await browser.storage.local.set({ queueNotes: newNotes });
  }

  static async getQueueNotes() {
    const { queueNotes: currentNotes } = await browser.storage.local.get({ queueNotes: [] });
    return currentNotes;
  }

  static addListener(listener) {
    browser.storage.onChanged.addListener((changes, area) => {
      if (area === 'local') listener(changes);
    });
  }

  static async saveArchiveNote(newNote) {
    const { archiveNotes: currentNotes } = await browser.storage.local.get({ archiveNotes: [] });
    console.log(currentNotes)
    const newNotes = [...currentNotes, newNote];
    await browser.storage.local.set({ archiveNotes: newNotes });
  }

  static async deleteArchiveNote(noteId) {
    const { archiveNotes: currentNotes } = await browser.storage.local.get({ archiveNotes: [] });
    const newNotes = currentNotes.filter((note) => note.id !== noteId);
    await browser.storage.local.set({ archiveNotes: newNotes });
  }

  static async getArchiveNotes() {
    const { archiveNotes: currentNotes } = await browser.storage.local.get({ archiveNotes: [] });
    return currentNotes;
  }
}
