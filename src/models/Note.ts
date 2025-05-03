// Clase note para tipear las notas 
export class Note {
  // Atributos
  private static idCounter: number = 1; // Atributo estatico para generar id en secuencia
  private _id: number;
	private _title: string;
	private _wasCompleted: boolean;

	constructor( title: string) {
		this._id = Note.idCounter++;
		this._title = title;
		this._wasCompleted = false;
	}

  // Getters y Setters
	get id(): number {
		return this._id;
	}

	get title(): string {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}

	get wasCompleted(): boolean {
		return this._wasCompleted;
	}
	set wasCompleted(wasCompleted: boolean) {
		this._wasCompleted = wasCompleted;
  }
  
}
