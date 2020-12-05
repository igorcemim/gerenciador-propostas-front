import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListagemContatosComponent } from './listagem-contatos.component';

describe('ListagemContatosComponent', () => {
  let component: ListagemContatosComponent;
  let fixture: ComponentFixture<ListagemContatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
