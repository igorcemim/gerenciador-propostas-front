import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListagemPropostasComponent } from './listagem-propostas.component';

describe('ListagemPropostasComponent', () => {
  let component: ListagemPropostasComponent;
  let fixture: ComponentFixture<ListagemPropostasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPropostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPropostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
