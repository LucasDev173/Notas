import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTextboxComponent } from './note-textbox.component';

describe('NoteTextboxComponent', () => {
  let component: NoteTextboxComponent;
  let fixture: ComponentFixture<NoteTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTextboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
