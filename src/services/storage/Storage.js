export default class Storage {
  static async saveQueueNote(newNote) {
    const currentNotes = await browser.storage.local.get('queueNotes');
    const newNotes = [...currentNotes, newNote];
    return browser.storage.local.set('queueNotes', newNotes);
  }

  static async deleteQueueNote(noteId) {
    const currentNotes = await browser.storage.local.get('queueNotes');
    const newNotes = currentNotes.filter((note) => note.id !== noteId);
    return browser.storage.local.get('queueNotes', newNotes);
  }

  static async getQueueNotes() {
    return browser.storage.local.get('queue');
  }

  static setListener(listener) {
    browser.storage.local.onChanged = listener;
  }

  static async saveArchiveNote(newNote) {
    const currentNotes = await browser.storage.local.get('archiveNotes');
    const newNotes = [...currentNotes, newNote];
    return browser.storage.local.set('archiveNotes', newNotes);
  }

  static async deleteArchiveNote(noteId) {
    const currentNotes = await browser.storage.local.get('archiveNotes');
    const newNotes = currentNotes.filter((note) => note.id !== noteId);
    return browser.storage.local.set('archiveNotes', newNotes);
  }

  static async getArchiveNotes() {
    return browser.storage.local.get('archiveNotes');
  }
}
