import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompaniaComponent } from './new-compania.component';

describe('NewCompaniaComponent', () => {
  let component: NewCompaniaComponent;
  let fixture: ComponentFixture<NewCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
