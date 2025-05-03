import { Note } from "../models/Note";

// Manejador de notas
export class NoteManager {
  // Array de notas nos servira para almacenar las notas y renderizarlas
	private static notes: Note[] = [];

  // Metodos

  // Agrega una nueva nota
	static addNote(title:string): void {
		this.notes.push(new Note(title));
	}

  // Obtiene todas las notas
	static getNotes(): Note[] {
		return this.notes;
	}

  // Marca una nota como completada por id
	static noteCompleted(id: number): void {
		this.notes.find((note) => {
			if (note.id === id) note.wasCompleted = !note.wasCompleted;
		});
	}

  // Eliminar nota por id
 static removeNote(id: number): void {
    this.notes.filter((note, index) => {
      if (note.id === id) {
        this.notes.splice(index, 1);
      }
    })
  }
}

// Cargando algunas notas
NoteManager.addNote("Limpiar el cuarto");
NoteManager.addNote("Terminar app de notas");
NoteManager.addNote("Pasear al perro");
