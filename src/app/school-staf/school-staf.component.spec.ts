import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStafComponent } from './school-staf.component';

describe('SchoolStafComponent', () => {
  let component: SchoolStafComponent;
  let fixture: ComponentFixture<SchoolStafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolStafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolStafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
