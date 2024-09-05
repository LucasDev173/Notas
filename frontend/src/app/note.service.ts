import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable, Subscription, tap } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {};
  
  public getAll(): Observable<Note[]>{
    return this.http.get<Note[]>("http://localhost:8080/notes/all");
  }

  public post(text: string){
    let params = new HttpParams().set('text', text)
    return this.http.post<String>("http://localhost:8080/notes/add", null, {params, observe: 'response', responseType: 'text' as 'json'}).subscribe(response => console.log(response));
  }
}
