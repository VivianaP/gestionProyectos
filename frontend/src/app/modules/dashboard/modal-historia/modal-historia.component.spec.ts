import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistoriaComponent } from './modal-historia.component';

describe('ModalHistoriaComponent', () => {
  let component: ModalHistoriaComponent;
  let fixture: ComponentFixture<ModalHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
