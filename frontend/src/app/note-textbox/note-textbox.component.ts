import { Component, OnInit} from '@angular/core';
import { Note } from '../note';
import { CommonModule} from '@angular/common';
import { NoteService } from '../note.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-textbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './note-textbox.component.html',
  styleUrl: './note-textbox.component.css',
  providers: [NoteService]
})

export class NoteTextboxComponent {
  
  noteForm = this.formBuilder.group({
    text: '',
  })

  constructor(
    private noteService: NoteService,
    private formBuilder: FormBuilder
  ){}

  onSubmit(): void {
    this.noteService.post(this.noteForm.value.text!);
  }
}
