package com.ensolvers.NotesApplication.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ensolvers.NotesApplication.entities.Note;

public interface NoteRepository extends CrudRepository<Note, Integer> {

}
