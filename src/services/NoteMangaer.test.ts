import { NoteManager } from "./NoteManager";

describe("Starting test for NoteManager", () => {
	const notes = NoteManager.getNotes();

	beforeEach(() => {
		notes.length = 0;
	});

	it("Should add a new note", () => {
		NoteManager.addNote("Terminar pruebas");

		expect(notes.length).toEqual(1);
		expect(notes[0].title).toBe("Terminar pruebas");
	});

	it("Should complete a note", () => {
		NoteManager.addNote("Terminar pruebas");
		expect(notes[0].wasCompleted).toBe(false);
		notes[0].wasCompleted = true;
		expect(notes[0].wasCompleted).toBe(true);
	});

	it("Should remove a note by Id", () => {
		NoteManager.addNote("Terminar pruebas");
		// console.log(notes[0].id); ves que id tiene la nota
		expect(notes.length).toEqual(1);
    NoteManager.removeNote(6);
		expect(notes.length).toEqual(0);
	});
});
