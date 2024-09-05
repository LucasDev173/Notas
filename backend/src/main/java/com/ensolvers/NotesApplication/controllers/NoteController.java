package com.ensolvers.NotesApplication.controllers;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.ensolvers.NotesApplication.entities.Note;
import com.ensolvers.NotesApplication.repositories.NoteRepository;

@Controller
@CrossOrigin
@RequestMapping("notes")
public class NoteController {
	
	@Autowired
	private NoteRepository noteRepository;
	
	@PostMapping("/add")
	public ResponseEntity<String> addNote(@RequestParam String text){
		Note note = new Note();
		note.setText(text);
		noteRepository.save(note);
		return new ResponseEntity<>("Note created succesfully.", HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public @ResponseBody Iterable<Note> getAll(){
		return noteRepository.findAll();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<String> editNote(@PathVariable Integer id, @RequestParam String newText, @RequestParam Boolean isActive){
		Optional<Note> note = noteRepository.findById(id);
		if(note.isPresent()) {
			Note newNote = note.get();
			newNote.setText(newText);
			newNote.setIsActive(isActive);
			noteRepository.save(newNote);
			return new ResponseEntity<>("Edit succesful.", HttpStatus.OK);
		}
		return new ResponseEntity<>("The requested note does not exist.", HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Integer id){
		noteRepository.deleteById(id);
		return new ResponseEntity<>("Success!", HttpStatus.OK);
	}
	
	
}
