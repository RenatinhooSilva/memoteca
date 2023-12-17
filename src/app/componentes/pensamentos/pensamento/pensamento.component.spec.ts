import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComponent } from './pensamento.component';

describe('PensamentoComponent', () => {
  let component: PensamentoComponent;
  let fixture: ComponentFixture<PensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamentoComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should que a largura seja altera ', () => {
    fixture.detectChanges();
    component.pensamento
    component.larguraPensamentos();
    expect(component.pensamento.conteudo).toEqual('I love Jesus');
  });

  it('should que a largura seja altera ', () => {
    fixture.detectChanges();
    component.pensamento
    component.larguraPensamentos();
    expect(component.pensamento).toBeTruthy();
  });
});
