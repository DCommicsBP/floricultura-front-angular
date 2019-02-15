import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoFiliaisComponent } from './localizacao-filiais.component';

describe('LocalizacaoFiliaisComponent', () => {
  let component: LocalizacaoFiliaisComponent;
  let fixture: ComponentFixture<LocalizacaoFiliaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacaoFiliaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacaoFiliaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
