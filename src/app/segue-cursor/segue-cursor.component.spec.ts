import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegueCursorComponent } from './segue-cursor.component';

describe('SegueCursorComponent', () => {
  let component: SegueCursorComponent;
  let fixture: ComponentFixture<SegueCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegueCursorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegueCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
