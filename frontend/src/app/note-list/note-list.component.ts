import { Component, OnInit} from '@angular/core';
import { Note } from '../note';
import { CommonModule} from '@angular/common';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
  providers: [NoteService]
})

export class NoteListComponent implements OnInit{
  notes:Note[] = [];

  constructor(private noteService: NoteService){}

  ngOnInit(): void {
      this.noteService.getAll().subscribe(notes => this.notes = notes);
  }  
}