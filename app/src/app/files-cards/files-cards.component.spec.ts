import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCardsComponent } from './files-cards.component';

describe('FilesCardsComponent', () => {
  let component: FilesCardsComponent;
  let fixture: ComponentFixture<FilesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
