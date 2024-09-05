import { ApplicationConfig, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteTextboxComponent } from './note-textbox/note-textbox.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteListComponent, NoteTextboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note-taking';
}
export const AppConfig: ApplicationConfig ={
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
}

