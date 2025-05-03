import { Note } from "./models/Note";
import { NoteManager } from "./services/NoteManager";

// Variables y Selectores DOM
const d: Document = document;
const $ul = d.querySelector(".note-list") as HTMLUListElement;
const $form = d.querySelector(".note-form") as HTMLFormElement;
const $inputForm = d.querySelector(".form-item") as HTMLInputElement;

// Nos servira para renderizar las notas en el DOM
const createCard = (notes: Note[]) => {
	$ul.innerHTML = "";
	$ul.append($inputForm);

  // Recorremos el array de notas y creamos una tarjeta para cada una y la agregamos al DOM
	notes.forEach((note) => {
		const li = d.createElement("li");
		const input = d.createElement("input");
		const checkbox = d.createElement("input");
		const trash = d.createElement("img");

		input.classList.add("title");
		input.value = note.title;
		input.disabled = true;

		checkbox.type = "checkbox";
    checkbox.checked = note.wasCompleted;

    // Si la nota esta completada la marcamos de acuerdo al valor de checked
		checkbox.addEventListener("click", (e) => {
			NoteManager.noteCompleted(note.id);
		});

		trash.src = "./assets/img/trash.svg";
		trash.classList.add("trash");
    // Eliminamos la nota y actualizamos el la lista en el DOM
		trash.addEventListener("click", () => {
			NoteManager.removeNote(note.id);
      createCard(NoteManager.getNotes());
		});

    // Agregamos los elementos a la li
		li.classList.add("note-card");
		li.append(input);
		li.append(checkbox);
		li.append(trash);

    // Agregamos la li con sus elementos al ul para rendirzarlos en el DOM
		$ul.append(li);
	});
};


// Nos servira para crear una nueva nota y agregarla al array y al dom
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Capturamos el primer elemento del formulario
	const inputForm = $form.elements[0] as HTMLInputElement;
	createCard(NoteManager.getNotes());

	NoteManager.addNote(inputForm.value);
	createCard(NoteManager.getNotes());
	inputForm.value = "";
});

// Nos servira para renderizar las notas al cargar el DOM
d.addEventListener("DOMContentLoaded", () => {
	createCard(NoteManager.getNotes());
});
