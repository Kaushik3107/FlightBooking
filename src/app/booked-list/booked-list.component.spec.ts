import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedListComponent } from './booked-list.component';

describe('BookedListComponent', () => {
  let component: BookedListComponent;
  let fixture: ComponentFixture<BookedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedListComponent]
    });
    fixture = TestBed.createComponent(BookedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
