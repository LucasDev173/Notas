package com.ensolvers.NotesApplication.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Note {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	@Column
	private String text;
	@Column
	private Boolean isActive = true;

	public Integer getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	protected void setId(Integer id) {
		this.id = id;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
}
