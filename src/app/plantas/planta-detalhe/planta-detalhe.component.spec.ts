import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaDetalheComponent } from './planta-detalhe.component';

describe('PlantaDetalheComponent', () => {
  let component: PlantaDetalheComponent;
  let fixture: ComponentFixture<PlantaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
